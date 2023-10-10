declare module '*.module.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';

declare global {
  type Keys<T extends Record<string, unknown>> = keyof T;
  type Values<T extends Record<string, unknown>> = T[Keys<T>];
}

export {};
