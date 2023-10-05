import { createElement } from 'utils/create-element';
import { Main } from 'layouts/main/main';
import { arrowButtonTmpl } from 'components/arrow-button/arrow-button.tmpl';
import imgSrc from 'media/empty-photo.png';
import { avatarTmpl } from 'components/avatar/avatar.tmpl';
import { buttonTmpl } from 'components/button/button.tmpl';
import { PROFILE_INFO_ITEMS } from 'pages/profile/profile.constants';
import { action, main as mainTmpl } from 'pages/profile/profile-change/profile-change.tmpl';

export const ProfileChange = () => {
  const buttonArrow = createElement(arrowButtonTmpl);

  const button = createElement(buttonTmpl, {
    text: 'Сохранить',
    type: 'button',
  });

  const side = createElement(action, {
    button: buttonArrow,
  });

  const main = createElement(mainTmpl, {
    avatar: createElement(avatarTmpl, { imgSrc }),
    firstName: 'Иван',
    profileInfo: PROFILE_INFO_ITEMS,
    button,
  });

  return Main({ side, main });
};
