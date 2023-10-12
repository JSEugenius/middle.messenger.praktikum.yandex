import { PersonalInfo } from 'pages/profile/personal-info/personal-info';
import { ServerError } from 'pages/errors/server-error/server-error';
import { SignIn } from 'pages/sign-in/sign-in';
import { SignUp } from 'pages/sign-up/sign-up';
import { ProfileChange } from 'pages/profile/profile-change/profile-change';
import { PasswordChange } from 'pages/profile/password-change/password-change';
import { Chat } from 'pages/chat/chat';
import { renderDOM } from 'utils/render-dom';
import { Block } from 'classes/block';
import { Button } from 'components/button/button';
import { Feed } from 'pages/chat/components/feed/feed';
import { CHAT_LIST } from 'pages/chat/chat-list/chat-list.constants';
import { createElement } from 'utils/create-element';
import { chatItemTmpl } from 'components/chat-item/chat-item.tmpl';
import { MESSAGES } from 'pages/chat/chat-room/chat-room.constants';
import { messageTmpl, messageWithImg } from 'components/message/message.tmpl';
import { Message, TMessage } from 'components/message/message';

const ROUTES = {
  // '/': SignIn(),
  // '/sign-in': SignIn(),
  // '/sign-up': SignUp(),
  // '/chat': Chat(),
  // '/profile': PersonalInfo(),
  // '/profile-change': ProfileChange(),
  // '/password-change': PasswordChange(),
  // '/404': notFountPage,
  // '/': notFountPage,
  // '/500': ServerError(),
};

window.addEventListener('DOMContentLoaded', () => {
  //   const path = window.location.pathname as keyof typeof ROUTES;
  //   renderDOM('#app', ROUTES[path]);

  const messages = MESSAGES.map((item) => new Message(item as TMessage));

  const feed = new Feed({ messages });

  renderDOM('#app', feed);
});
