import { Block } from 'classes/block';
import { chatItemTmpl } from 'components/chat-item/chat-item.tmpl';

type TChatItem = {
  avatar?: string;
  title: string;
  time: string;
  message: string;
  count?: string | number;
};

export class ChatItem extends Block<TChatItem> {
  protected render(): DocumentFragment {
    return this.compile(chatItemTmpl, this.props);
  }
}
