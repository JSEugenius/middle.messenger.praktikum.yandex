import { createElement } from 'utils/create-element.ts';
import { centeredLayout } from './centered.tmpl.ts';

export const Centered = (content: string) => {
  return createElement(centeredLayout, { content });
};
