import { Main } from 'layouts/main/main.ts';
import { createElement } from 'utils/create-element.ts';
import { actionTmpl, passwordChangeTmpl } from './password-change.tmpl.ts';
import { arrowButtonTmpl } from 'components/arrow-button/arrow-button.tmpl.ts';
import { avatarTmpl } from 'components/avatar/avatar.tmpl.ts';
import { PASSWORD_ITEMS } from '../profile.constants.ts';
import { buttonTmpl } from 'components/button/button.tmpl.ts';
import imgSrc from 'media/empty-photo.png';

export const PasswordChange = () => {
  const button = createElement(buttonTmpl, {
    text: 'Сохранить',
    type: 'button',
  });

  const main = createElement(passwordChangeTmpl, {
    avatar: createElement(avatarTmpl, { imgSrc }),
    firstName: 'Иван',
    passwordItems: PASSWORD_ITEMS,
    button,
  });

  const side = createElement(actionTmpl, {
    button: createElement(arrowButtonTmpl),
  });

  return Main({ side, main });
};
