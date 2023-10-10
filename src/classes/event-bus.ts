type Listener = (...args: any[]) => void;

export class EventBus<EventName extends string> {
  private _listeners: { [K in EventName]?: Listener[] } = {};

  private _checkEvent(event: EventName) {
    if (!this._listeners[event]) {
      throw new Error(`Нет события ${event}`);
    }
  }

  on(event: EventName, callback: Listener) {
    if (!this._listeners[event]) {
      this._listeners[event] = [];
    }

    this._listeners[event]!.push(callback);
  }

  off(event: EventName, callback: Listener) {
    this._checkEvent(event);

    this._listeners[event] = this._listeners[event]!.filter((listener) => listener !== callback);
  }

  emit(event: EventName, ...args: any[]) {
    this._checkEvent(event);

    this._listeners[event]!.forEach((listener) => {
      listener(...args);
    });
  }
}
