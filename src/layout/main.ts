import { createElement } from 'utils/handlebars-helpers';
import { tmpl } from './main.tmpl';

interface IMain {
  sideContent: string;
  mainContent: string;
}

export const Main = ({ sideContent, mainContent }: IMain) => {
  return createElement(tmpl, { sideContent, mainContent });
};