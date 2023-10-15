import { Block } from 'classes/block';
import { messageTmpl, messageWithImg } from 'components/message/message.tmpl';

export type TMessage = {
  text: string;
  time: string;
  own?: boolean;
  imgSrc?: string;
};

export class Message extends Block<TMessage> {
  protected render(): DocumentFragment {
    if (this.props.imgSrc) {
      return this.compile(messageWithImg, this.props);
    }
    return this.compile(messageTmpl, this.props);
  }
}
