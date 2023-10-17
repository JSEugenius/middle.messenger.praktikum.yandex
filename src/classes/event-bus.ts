type Handler<A extends any[] = unknown[]> = (...args: A) => void;
type MapInterface<P> = P[keyof P];

export class EventBus<
  E extends Record<string, string> = Record<string, string>,
  Args extends Record<MapInterface<E>, any[]> = Record<string, any[]>,
> {
  private readonly _listeners: {
    [K in MapInterface<E>]?: Handler<Args[K]>[]
  } = {};

  private _checkEvent<Event extends MapInterface<E>>(event: Event) {
    if (!this._listeners[event]) {
      throw new Error(`Нет события ${event}`);
    }
  }

  on<Event extends MapInterface<E>>(event: Event, callback: Handler<Args[Event]>) {
    if (!this._listeners[event]) {
      this._listeners[event] = [];
    }

    this._listeners[event]!.push(callback);
  }

  off<Event extends MapInterface<E>>(event: Event, callback: Handler<Args[Event]>) {
    this._checkEvent(event);

    this._listeners[event] = this._listeners[event]!.filter((listener) => listener !== callback);
  }

  emit<Event extends MapInterface<E>>(event: Event, ...args: Args[Event]) {
    this._checkEvent(event);

    this._listeners[event]!.forEach((listener) => {
      listener(...args);
    });
  }
}
