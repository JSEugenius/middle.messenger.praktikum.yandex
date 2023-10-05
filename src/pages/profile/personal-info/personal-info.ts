import { createElement } from 'utils/create-element';
import { action, main } from 'pages/profile/personal-info/personal-info.tmpl';
import { Main } from 'layouts/main/main';
import { arrowButtonTmpl } from 'components/arrow-button/arrow-button.tmpl';
import { linkTmpl } from 'components/link/link.tmpl';
import { avatarTmpl } from 'components/avatar/avatar.tmpl';
import imgSrc from 'media/empty-photo.png';
import { LINKS, PROFILE_INFO_ITEMS } from 'pages/profile/profile.constants';

export const PersonalInfo = () => {
  const buttonArrow = createElement(arrowButtonTmpl);
  const side = createElement(action, {
    button: buttonArrow,
  });

  const buttons = LINKS.map((item) => createElement(linkTmpl, item));

  const mainContent = createElement(main, {
    avatar: createElement(avatarTmpl, { imgSrc }),
    firstName: 'Иван',
    profileInfo: PROFILE_INFO_ITEMS,
    buttons,
  });

  return Main({ side, main: mainContent });
};
