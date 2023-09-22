import { compileTemplate, createElement } from 'utils/handlebars-helpers.ts';
import { input as inputTmpl } from 'components/input/input.tmpl.ts';
import { tmpl as linkTmpl } from 'components/link/link.tmpl.ts';
import { tmpl } from 'pages/sign-in/sign-in.tmpl.ts';
import { button as buttonTmpl } from 'components/button/button.tmpl.ts';
import { Layout } from 'layout/layout.ts';

export const SignIn = () => {
  const input = compileTemplate(inputTmpl);
  const link = compileTemplate(linkTmpl);
  const button = compileTemplate(buttonTmpl);

  const content = createElement(tmpl, {
    title: 'Вход',
    inputLogin: input({
      name: 'login',
      label: 'Логин',
      type: 'text',
      error: 'Неверный логин или пароль',
    }),
    inputPassword: input({
      name: 'password',
      label: 'Пароль',
      type: 'password',
    }),
    linkSignIn: button({
      type: 'button',
      text: 'Авторизоваться',
    }),
    linkSignUp: link({
      to: '/500',
      text: 'Нет аккаунта?',
    }),
  });

  return Layout(content);
};