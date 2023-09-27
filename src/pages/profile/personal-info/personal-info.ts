import { createElement } from 'utils/create-element.ts';
import { action, main } from 'pages/profile/personal-info/personal-info.tmpl.ts';
import { Main } from 'layouts/main/main.ts';
import { arrowButtonTmpl } from 'components/arrow-button/arrow-button.tmpl.ts';
import { linkTmpl } from 'components/link/link.tmpl.ts';
import { avatarTmpl } from 'components/avatar/avatar.tmpl.ts';
import { LINKS, PROFILE_INFO_ITEMS } from '../profile.constants.ts';
import imgSrc from 'media/empty-photo.png';

export const PersonalInfo = () => {
  const buttonArrow = createElement(arrowButtonTmpl);
  const side = createElement(action, {
    button: buttonArrow,
  });

  const buttons = LINKS.map(item => {
    return createElement(linkTmpl, item);
  });

  const mainContent = createElement(main, {
    avatar: createElement(avatarTmpl, { imgSrc }),
    firstName: 'Иван',
    profileInfo: PROFILE_INFO_ITEMS,
    buttons,
  });

  return Main({ side: side, main: mainContent });
};