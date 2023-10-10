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

export class Block<PropsAndChildren extends Record<string, any>> {
  eventBus: () => BlockEventBus;

  children: Record<string, Block<any>>;

  private _element: HTMLElement | undefined;

  private readonly _id: string;

  private readonly _meta: {
    tagName: string;
    props: Partial<PropsAndChildren>;
  } | null = null;

  props: { __id?: string } & Partial<PropsAndChildren>;

  constructor(tagName: string, propsAndChildren: PropsAndChildren) {
    const { children, props } = this._getChildren(propsAndChildren);

    this.children = children;

    const eventBus = new EventBus<EventName>();
    this._id = makeUUID();
    this._meta = {
      tagName,
      props,
    };
    this.eventBus = () => eventBus;
    this.props = this._makePropsProxy({ ...props, __id: this._id });

    this._registerEvent(eventBus);
    this.eventBus().emit(BlockEvents.INIT);
  }

  _registerEvent(eventbus: BlockEventBus) {
    eventbus.on(BlockEvents.INIT, this.init.bind(this));
    eventbus.on(BlockEvents.FLOW_CDM, this._componentDidMount.bind(this));
    eventbus.on(BlockEvents.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventbus.on(BlockEvents.FLOW_RENDER, this._render.bind(this));
  }

  _getChildren(propsAndChildren: PropsAndChildren) {
    const children: Record<string, Block<any>> = {};
    const props: Partial<PropsAndChildren> = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key as keyof typeof props] = value;
      }
    });

    return { children, props };
  }

  _makePropsProxy(props: typeof this.props) {
    const self = this;

    return new Proxy(props, {
      set(target, prop, value) {
        const oldProps = { ...target };

        // eslint-disable-next-line no-param-reassign
        target[prop as keyof PropsAndChildren] = value;
        self.eventBus().emit(BlockEvents.FLOW_CDU, oldProps, target);

        return true;
      },
      deleteProperty() {
        throw new Error('нет доступа');
      },
    });
  }

  init() {
    this._createResources();
    this.eventBus().emit(BlockEvents.FLOW_RENDER);
  }

  _createResources() {
    const { tagName } = this._meta!;
    this._element = this._createDocumentElement(tagName);
  }

  _createDocumentElement(tagName: string) {
    const element = document.createElement(tagName);
    element.setAttribute('data-id', this._id!);

    return element;
  }

  _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount() {}

  dispatchComponentDidMount() {
    this.eventBus().emit(BlockEvents.FLOW_CDM);
  }

  _componentDidUpdate(oldProps: PropsAndChildren, newProps: PropsAndChildren) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus().emit(BlockEvents.FLOW_RENDER);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidUpdate(_oldProps: PropsAndChildren, _newProps: PropsAndChildren) {
    return true;
  }

  _render() {
    const block = this.render(); // render теперь возвращает DocumentFragment
    this._removeEvents();
    this._element!.innerHTML = ''; // удаляем предыдущее содержимое
    this._element!.appendChild(block);
    this._addEvents();
  }

  _addEvents() {
    const { events } = this.props;

    if (events) {
      Object.keys(events).forEach((event) => {
        this._element?.addEventListener(event, events[event]);
      });
    }
  }

  _removeEvents() {
    const { events } = this._meta!.props;

    if (events) {
      Object.keys(events).forEach((event) => {
        this._element?.removeEventListener(event, events[event]);
      });
    }
  }

  // @ts-ignore
  render(): DocumentFragment {
    return new DocumentFragment();
  }

  get element() {
    return this._element;
  }

  getContent() {
    return this.element;
  }

  setProps = (nextProps: PropsAndChildren) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  compile(template: string, props: PropsAndChildren) {
    const propsAndStubs: { [key: string]: unknown } = { ...props };

    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
    });

    const fragment = this._createDocumentElement('template') as HTMLTemplateElement;

    fragment.innerHTML = createElement(template, propsAndStubs);

    Object.values(this.children).forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);

      if (stub) {
        stub.replaceWith(child.getContent()!);
      }
    });

    return fragment.content;
  }

  show() {
    this.getContent()!.style.display = 'block';
  }

  hide() {
    this.getContent()!.style.display = 'none';
  }
}
