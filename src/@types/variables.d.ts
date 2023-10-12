declare global {
  type Keys<T extends Record<string, unknown>> = keyof T;
  type Values<T extends Record<string, unknown>> = T[Keys<T>];
}

export {};
