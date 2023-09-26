import { createElement } from 'utils/handlebars-helpers.ts';
import { tmpl } from './centered.tmpl.ts';

export const Centered = (content: string) => {
  return createElement(tmpl, { content });
};