import { Block } from 'classes/block';
import { chatListTmpl } from 'pages/chat/chat-list/chat-list.tmpl';

type TChatList = {
  chatList: Block[];
};

export class ChatList extends Block<TChatList> {
  protected render(): DocumentFragment {
    return this.compile(chatListTmpl, this.props);
  }
}
