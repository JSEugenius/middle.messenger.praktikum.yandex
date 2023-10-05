import { Main } from 'layouts/main/main';
import { createElement } from 'utils/create-element';
import { arrowButtonTmpl } from 'components/arrow-button/arrow-button.tmpl';
import { avatarTmpl } from 'components/avatar/avatar.tmpl';
import { buttonTmpl } from 'components/button/button.tmpl';
import { PASSWORD_ITEMS } from 'pages/profile/profile.constants';
import { actionTmpl, passwordChangeTmpl } from 'pages/profile/password-change/password-change.tmpl';
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
