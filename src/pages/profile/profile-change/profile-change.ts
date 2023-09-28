import { createElement } from 'utils/create-element.ts';
import { action, main as mainTmpl } from './profile-change.tmpl.ts';
import { Main } from 'layouts/main/main.ts';
import { arrowButtonTmpl } from 'components/arrow-button/arrow-button.tmpl.ts';
import imgSrc from 'media/empty-photo.png';
import { avatarTmpl } from 'components/avatar/avatar.tmpl.ts';
import { PROFILE_INFO_ITEMS } from '../profile.constants.ts';
import { buttonTmpl as buttonTmpl } from 'components/button/button.tmpl.ts';

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
