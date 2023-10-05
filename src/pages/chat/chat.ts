import { Main } from 'layouts/main/main';
import { createElement } from 'utils/create-element';
import { chatListTmpl } from 'pages/chat/chat-list/chat-list.tmpl';
import { chatRoomTmpl } from 'pages/chat/chat-room/chat-room.tmpl';
import { chatItemTmpl } from 'components/chat-item/chat-item.tmpl';
import { CHAT_LIST } from 'pages/chat/chat-list/chat-list.constants';
import { messageTmpl, messageWithImg } from 'components/message/message.tmpl';
import { MESSAGES } from 'pages/chat/chat-room/chat-room.constants';
import { arrowButtonTmpl } from 'components/arrow-button/arrow-button.tmpl';
import { headerTmpl } from 'pages/chat/components/header/header.tmpl';
import { feedTmpl } from 'pages/chat/components/feed/feed.tmpl';
import { actionsTmpl } from 'pages/chat/components/actions/actions.tmpl';
import avatarSrc from 'media/my-avatar.jpg';

export const Chat = () => {
  const messages = MESSAGES.map((item) => {
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

  const chatList = CHAT_LIST.map((item) => createElement(chatItemTmpl, item));

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
