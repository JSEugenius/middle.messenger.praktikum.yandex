import { Block } from 'classes/block';
import { linkTmpl } from 'components/link/link.tmpl';

type TLink = {
  to: string;
  text: string;
  accent?: boolean;
};

export class Link extends Block<TLink> {
  protected render(): DocumentFragment {
    return this.compile(linkTmpl, this.props);
  }
}
