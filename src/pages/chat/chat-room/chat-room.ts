import { Block } from 'classes/block';
import { chatRoomTmpl } from 'pages/chat/chat-room/chat-room.tmpl';

type TChatRoom = {
  header: Block;
  feed: Block;
  actions: Block;
};

export class ChatRoom extends Block<TChatRoom> {
  protected render(): DocumentFragment {
    return this.compile(chatRoomTmpl, this.props);
  }
}
