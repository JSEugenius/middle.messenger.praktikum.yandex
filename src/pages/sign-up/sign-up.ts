import { createElement } from 'utils/create-element';
import { inputTmpl } from 'components/input/input.tmpl';
import { linkTmpl } from 'components/link/link.tmpl';
import { buttonTmpl } from 'components/button/button.tmpl';
import { Centered } from 'layouts/centered/centered';
import { formTmpl } from 'modules/form/form.tmpl';
import { BUTTON, INPUTS, LINK } from 'pages/sign-up/sign-up.constants';

export const SignUp = () => {
  const inputs = INPUTS.map((input) => createElement(inputTmpl, input));

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
