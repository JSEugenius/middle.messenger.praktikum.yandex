import { createElement } from 'utils/create-element.ts';
import { inputTmpl as inputTmpl } from 'components/input/input.tmpl.ts';
import { linkTmpl as linkTmpl } from 'components/link/link.tmpl.ts';
import { buttonTmpl as buttonTmpl } from 'components/button/button.tmpl.ts';
import { Centered } from 'layouts/centered/centered.ts';
import { formTmpl } from 'modules/form/form.tmpl.ts';

export const SignIn = () => {
  const content = createElement(formTmpl, {
    title: 'Вход',
    inputs: [
      createElement(inputTmpl, {
        name: 'login',
        label: 'Логин',
        type: 'text',
        error: 'Неверный логин или пароль',
      }),
      createElement(inputTmpl, {
        name: 'password',
        label: 'Пароль',
        type: 'password',
      }),
    ],
    buttons: [
      createElement(buttonTmpl, {
        type: 'button',
        text: 'Авторизоваться',
      }),
      createElement(linkTmpl, {
        to: '/sign-up',
        text: 'Нет аккаунта?',
      }),
    ],
  });

  return Centered(content);
};