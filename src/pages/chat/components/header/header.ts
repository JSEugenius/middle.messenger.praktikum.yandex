import { Block } from 'classes/block';
import { headerTmpl } from 'pages/chat/components/header/header.tmpl';

type THeader = {
  avatar?: string;
  title: string;
};

export class Header extends Block<THeader> {
  protected render(): DocumentFragment {
    return this.compile(headerTmpl, this.props);
  }
}
