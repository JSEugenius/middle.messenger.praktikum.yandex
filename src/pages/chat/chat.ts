import { Main } from 'layouts/main/main.ts';
import { createElement } from 'utils/create-element.ts';
import { chatListTmpl } from 'pages/chat/chat-list/chat-list.tmpl.ts';
import { chatRoomTmpl } from 'pages/chat/chat-room/chat-room.tmpl.ts';
import { chatItemTmpl } from 'components/chat-item/chat-item.tmpl.ts';
import { CHAT_LIST } from 'pages/chat/chat-list/chat-list.constants.ts';
import { messageTmpl, messageWithImg } from 'components/message/message.tmpl.ts';
import { MESSAGES } from 'pages/chat/chat-room/chat-room.constants.ts';
import { arrowButtonTmpl } from 'components/arrow-button/arrow-button.tmpl.ts';
import { headerTmpl } from 'pages/chat/components/header/header.tmpl.ts';
import { feedTmpl } from 'pages/chat/components/feed/feed.tmpl.ts';
import { actionsTmpl } from 'pages/chat/components/actions/actions.tmpl.ts';
import avatarSrc from 'media/my-avatar.jpg';

export const Chat = () => {
  const messages = MESSAGES.map(item => {
    if (item.imgSrc) {
      return {
        content: createElement(messageWithImg, item),
        own: item.own ?? null,
      };
    }
    return {
      content: createElement(messageTmpl, item),
      own: item.own ?? null,
    };
  });

  const chatList = CHAT_LIST.map(item =>
    createElement(chatItemTmpl, item),
  );

  const header = createElement(headerTmpl, {
    avatar: avatarSrc,
    title: 'Илья',
  });

  const feed = createElement(feedTmpl, {
    messages,
  });

  const actions = createElement(actionsTmpl, {
    submitButton: createElement(arrowButtonTmpl),
  });

  const main = createElement(chatRoomTmpl, {
    header,
    feed,
    actions,
  });

  const side = createElement(chatListTmpl, {
    to: '/profile',
    text: 'Профиль',
    chatList,
  });

  return Main({ side, main });
};
