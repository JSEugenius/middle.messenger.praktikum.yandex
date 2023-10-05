import { createElement } from 'utils/create-element';
import { mainLayoutTmpl } from 'layouts/main/main.tmpl';

export const Main = ({ side, main }: {
  side: string;
  main: string;
}) => createElement(mainLayoutTmpl, { side, main });
