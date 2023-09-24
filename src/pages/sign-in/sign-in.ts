import { createElement } from 'utils/handlebars-helpers.ts';
import { input as inputTmpl } from 'components/input/input.tmpl.ts';
import { link as linkTmpl } from 'components/link/link.tmpl.ts';
import { button as buttonTmpl } from 'components/button/button.tmpl.ts';
import { Layout } from 'layout/layout.ts';
import { form } from 'modules/form/form.tmpl.ts';

export const SignIn = () => {
  const content = createElement(form, {
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

  return Layout(content);
};