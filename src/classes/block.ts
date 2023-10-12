import { v4 as makeUUID } from 'uuid';
import { createElement } from 'utils/create-element';
import { EventBus } from './event-bus';

const enum BlockEvents {
  INIT = 'init',
  FLOW_CDM = 'flow:component-did-mount',
  FLOW_CDU = 'flow:component-did-update',
  FLOW_RENDER = 'flow:render',
}

type EventName = Values<typeof BlockEvents>;

type BlockEventBus = EventBus<EventName>;

export class Block<P extends Record<string, any> = any> {
  eventBus: () => BlockEventBus;

  children: Record<string, Block | Block[]>;

  private _element: HTMLElement | undefined;

  private readonly _id: string;

  private readonly _meta: {
    props: P;
  } | null = null;

  props: P;

  constructor(propsAndChildren: P) {
    const { children, props } = this._getChildren(propsAndChildren);

    this.children = children;

    const eventBus = new EventBus<EventName>();
    this._id = makeUUID();
    this._meta = {
      props,
    };
    this.eventBus = () => eventBus;
    this.props = this._makePropsProxy(props);

    this._registerEvent(eventBus);
    this.eventBus().emit(BlockEvents.INIT);
  }

  /** =========================================================================================== */
  _registerEvent(eventbus: BlockEventBus) {
    eventbus.on(BlockEvents.INIT, this.init.bind(this));
    eventbus.on(BlockEvents.FLOW_CDM, this._componentDidMount.bind(this));
    eventbus.on(BlockEvents.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventbus.on(BlockEvents.FLOW_RENDER, this._render.bind(this));
  }

  /** =========================================================================================== */
  _getChildren(propsAndChildren: P) {
    const children: Record<string, Block | Block[]> = {};
    const props: P = {} as P;

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else if (Array.isArray(value) && value[0] instanceof Block) {
        children[key] = [...value];
      } else {
        props[key as keyof P] = value;
      }
    });

    return { children, props };
  }

  /** =========================================================================================== */
  _makePropsProxy(props: typeof this.props) {
    const self = this;

    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop as keyof P];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop, value) {
        const oldProps = { ...target };

        // eslint-disable-next-line no-param-reassign
        target[prop as keyof P] = value;
        self.eventBus().emit(BlockEvents.FLOW_CDU, oldProps, target);

        return true;
      },
      deleteProperty() {
        throw new Error('нет доступа');
      },
    });
  }

  /** =========================================================================================== */
  init() {
    this.eventBus().emit(BlockEvents.FLOW_RENDER);
  }

  /** =========================================================================================== */
  _createDocumentElement(tagName: string) {
    const element = document.createElement(tagName);
    element.setAttribute('data-id', this._id!);

    return element;
  }

  /** =========================================================================================== */
  _componentDidMount() {
    this.componentDidMount();

    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((item) => {
          item.dispatchComponentDidMount();
        });
      } else {
        child.dispatchComponentDidMount();
      }
    });
  }

  /** =========================================================================================== */
  componentDidMount() {}

  /** =========================================================================================== */
  dispatchComponentDidMount() {
    this.eventBus().emit(BlockEvents.FLOW_CDM);
  }

  /** =========================================================================================== */
  _componentDidUpdate(oldProps: P, newProps: P) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus().emit(BlockEvents.FLOW_RENDER);
    }
  }

  /** =========================================================================================== */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidUpdate(_oldProps: P, _newProps: P) {
    return true;
  }

  /** =========================================================================================== */
  _addEvents() {
    const { events } = this.props as P & { events?: Record<string, () => void> };

    if (events) {
      Object.keys(events).forEach((event) => {
        this._element?.addEventListener(event, events[event]);
      });
    }
  }

  /** =========================================================================================== */
  _removeEvents() {
    const { events } = this._meta!.props;

    if (events) {
      Object.keys(events).forEach((event) => {
        this._element?.removeEventListener(event, events[event]);
      });
    }
  }

  /** =========================================================================================== */
  get element() {
    return this._element;
  }

  /** =========================================================================================== */
  getContent() {
    return this.element;
  }

  /** =========================================================================================== */
  setProps = (nextProps: P) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  /** =========================================================================================== */
  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  /** =========================================================================================== */
  _render() {
    const block = this.render().firstElementChild; // render теперь возвращает DocumentFragment
    this._removeEvents();

    if (!this._element) {
      this._element = block! as HTMLElement;
    } else {
      this._element!.innerHTML = '';
      this._element.appendChild(block!);
    }

    this._addEvents();
  }

  /** =========================================================================================== */
  compile(template: string, props: P) {
    const propsAndStubs: { [key: string]: unknown | unknown[] } = { ...props };

    Object.entries(this.children).forEach(([key, child]) => {
      if (Array.isArray(child)) {
        propsAndStubs[key] = [];

        child.forEach((item) => {
          const stub = this._createStub(item);
          (propsAndStubs[key] as string[]).push(stub);
        });
      } else {
        propsAndStubs[key] = this._createStub(child);
      }
    });

    const fragment = this._createDocumentElement('template') as HTMLTemplateElement;
    fragment.innerHTML = createElement(template, propsAndStubs);

    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((item) => {
          this._replaceStub(fragment, item);
        });
      } else {
        this._replaceStub(fragment, child);
      }
    });

    return fragment.content;
  }

  /** =========================================================================================== */
  _createStub(child: Block) {
    return `<div data-id="${child._id}"></div>`;
  }

  /** =========================================================================================== */
  _replaceStub(fragment: HTMLTemplateElement, child: Block) {
    const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
    if (stub) {
      stub.replaceWith(child.getContent()!);
    }
  }

  /** =========================================================================================== */
  show() {
    this.getContent()!.style.display = 'block';
  }

  hide() {
    this.getContent()!.style.display = 'none';
  }
}
