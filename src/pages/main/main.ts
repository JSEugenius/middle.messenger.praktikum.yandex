import { tmpl } from './main.tmpl';
import { compileTemplate, createElement, registerPartial } from 'utils/handlebars-helpers';
import { button as buttonTmpl } from 'components/button/button.tmpl';
import style from './main.module.scss';

export const Main = () => {
  const button = compileTemplate(buttonTmpl);
  registerPartial('button', button);

  return createElement(tmpl, {
    className: style.main,
    button: {
      text: 'Click me NOW',
      className: style.wow,
    },
  });
};