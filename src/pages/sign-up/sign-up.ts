import { createElement } from 'utils/handlebars-helpers.ts';
import { input as inputTmpl } from 'components/input/input.tmpl.ts';
import { link as linkTmpl } from 'components/link/link.tmpl.ts';
import { button as buttonTmpl } from 'components/button/button.tmpl.ts';
import { Centered } from 'layouts/centered/centered.ts';
import { form } from 'modules/form/form.tmpl.ts';
import { BUTTON, INPUTS, LINK } from './sign-up.constants.ts';

export const SignUp = () => {
  const inputs = INPUTS.map(input => {
    return createElement(inputTmpl, input);
  });

  const content = createElement(form, {
    title: 'Регистрация',
    inputs,
    buttons: [
      createElement(buttonTmpl, BUTTON),
      createElement(linkTmpl, LINK),
    ],
  });

  return Centered(content);
};