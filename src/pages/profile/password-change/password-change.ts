import { createElement } from 'utils/handlebars-helpers.ts';
import { action, main } from './password-change.tmpl.ts';
import { Main } from 'layouts/main/main.ts';
import { arrowButton } from 'components/arrow-button/arrow-button.tmpl.ts';
import imgSrc from 'media/empty-photo.png';
import { avatar } from 'components/avatar/avatar.tmpl.ts';
import { PASSWORD_ITEMS } from '../profile.constants.ts';
import { button as buttonTmpl } from 'components/button/button.tmpl.ts';

export const PasswordChange = () => {
  const buttonArrow = createElement(arrowButton);
  const side = createElement(action, {
    button: buttonArrow,
  });

  const button = createElement(buttonTmpl, {
    text: 'Сохранить',
    type: 'button',
  });

  const mainContent = createElement(main, {
    avatar: createElement(avatar, { imgSrc }),
    firstName: 'Иван',
    passwordItems: PASSWORD_ITEMS,
    button,
  });

  return Main({ side: side, main: mainContent });
};