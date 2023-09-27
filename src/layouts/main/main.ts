import { createElement } from 'utils/create-element.ts';
import { mainLayoutTmpl } from './main.tmpl.ts';

export const Main = ({ side, main }: {
  side: string;
  main: string;
}) => {
  return createElement(mainLayoutTmpl, { side, main });
};