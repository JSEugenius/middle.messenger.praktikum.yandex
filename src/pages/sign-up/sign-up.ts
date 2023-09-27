import { createElement } from 'utils/create-element.ts';
import { inputTmpl as inputTmpl } from 'components/input/input.tmpl.ts';
import { linkTmpl as linkTmpl } from 'components/link/link.tmpl.ts';
import { buttonTmpl as buttonTmpl } from 'components/button/button.tmpl.ts';
import { Centered } from 'layouts/centered/centered.ts';
import { formTmpl } from 'modules/form/form.tmpl.ts';
import { BUTTON, INPUTS, LINK } from './sign-up.constants.ts';

export const SignUp = () => {
  const inputs = INPUTS.map(input => {
    return createElement(inputTmpl, input);
  });

  const content = createElement(formTmpl, {
    title: 'Регистрация',
    inputs,
    buttons: [
      createElement(buttonTmpl, BUTTON),
      createElement(linkTmpl, LINK),
    ],
  });

  return Centered(content);
};