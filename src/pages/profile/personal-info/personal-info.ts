import { createElement } from 'utils/handlebars-helpers.ts';
import { action, main } from 'pages/profile/personal-info/personal-info.tmpl.ts';
import { Main } from 'layout/main.ts';
import { arrowButton } from 'components/arrow-button/arrow-button.tmpl.ts';
import imgSrc from 'media/empty-photo.png';
import { link } from 'components/link/link.tmpl.ts';
import { avatar } from 'components/avatar/avatar.tmpl.ts';
import { LINKS, PROFILE_INFO_ITEMS } from '../profile.constants.ts';

export const PersonalInfo = () => {
  const buttonArrow = createElement(arrowButton);
  const side = createElement(action, {
    button: buttonArrow,
  });

  const buttons = LINKS.map(item => {
    return createElement(link, item);
  });

  const mainContent = createElement(main, {
    avatar: createElement(avatar, { imgSrc }),
    firstName: 'Иван',
    profileInfo: PROFILE_INFO_ITEMS,
    buttons,
  });

  return Main({ sideContent: side, mainContent });
};