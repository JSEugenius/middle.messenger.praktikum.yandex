import { Main } from 'layouts/main/main.ts';
import { side } from 'pages/chat/chat-list/chat-list.tmpl.ts';
import { createElement } from 'utils/handlebars-helpers.ts';
import { chatItem as chatItemTmpl } from 'components/chat-item/chat-item.tmpl.ts';
import { CHAT_LIST } from 'pages/chat/chat-list/chat-list.constants.ts';
import { main } from 'pages/chat/chat-room/chat-room.tmpl.ts';

export const Chat = () => {
  const chatList = CHAT_LIST.map(item =>
    createElement(chatItemTmpl, item),
  );
  const mainContent = createElement(main);
  const sideContent = createElement(side, {
    to: '/profile',
    text: 'Профиль',
    chatList,
  });

  return Main({ side: sideContent, main: mainContent });
};