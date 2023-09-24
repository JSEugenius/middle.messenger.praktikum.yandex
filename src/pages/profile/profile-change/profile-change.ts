import { createElement } from 'utils/handlebars-helpers.ts';
import { action, main } from './profile-change.tmpl.ts';
import { Main } from 'layout/main.ts';
import { arrowButton } from 'components/arrow-button/arrow-button.tmpl.ts';
import imgSrc from 'media/empty-photo.png';
import { avatar } from 'components/avatar/avatar.tmpl.ts';
import { PROFILE_INFO_ITEMS } from '../profile.constants.ts';
import { button as buttonTmpl } from 'components/button/button.tmpl.ts';

export const ProfileChange = () => {
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
    profileInfo: PROFILE_INFO_ITEMS,
    button,
  });

  return Main({ sideContent: side, mainContent });
};