import { ChatList } from 'pages/chat/chat-list/chat-list';
import { ChatItem } from 'components/chat-item/chat-item';
import { ChatRoom } from 'pages/chat/chat-room/chat-room';
import { Header } from 'pages/chat/components/header/header';
import { CHAT_LIST, HEADER_PROPS } from 'pages/chat/chat.constants';
import { Feed } from 'pages/chat/components/feed/feed';
import { Message } from 'components/message/message';
import { ArrowButton } from 'components/arrow-button/arrow-button';
import { MainLayout } from 'layouts/main/main2';
import { Actions } from 'pages/chat/components/actions/actions';

export const ChatPage = () => {
  const chatList = CHAT_LIST.map((chatItem) => new ChatItem(chatItem));

  const header = new Header(HEADER_PROPS.header);

  const messages = HEADER_PROPS.messages.map((messageProps) => new Message(messageProps));

  const feed = new Feed({ messages });

  const actions = new Actions({
    button: new ArrowButton({}),
  });

  const main = new ChatRoom({
    header,
    feed,
    actions,
  });

  const side = new ChatList({
    chatList,
  });

  return new MainLayout({ main, side });
};
