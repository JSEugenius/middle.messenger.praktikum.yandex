import { createElement } from 'utils/handlebars-helpers';
import { tmpl } from './layout.tmpl';

export const Layout = (content: string) => {
  return createElement(tmpl, { content });
};