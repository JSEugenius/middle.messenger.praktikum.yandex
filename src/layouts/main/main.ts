import { createElement } from 'utils/handlebars-helpers.ts';
import { tmpl } from './main.tmpl.ts';

interface IMain {
  side: string;
  main: string;
}

export const Main = ({ side, main }: IMain) => {
  return createElement(tmpl, { side, main });
};