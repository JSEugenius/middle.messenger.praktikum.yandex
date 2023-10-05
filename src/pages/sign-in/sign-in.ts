import { createElement } from 'utils/create-element';
import { inputTmpl } from 'components/input/input.tmpl';
import { linkTmpl } from 'components/link/link.tmpl';
import { buttonTmpl } from 'components/button/button.tmpl';
import { Centered } from 'layouts/centered/centered';
import { formTmpl } from 'modules/form/form.tmpl';

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
