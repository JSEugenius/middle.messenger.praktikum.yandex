import { Block } from 'classes/block';
import { centeredLayout } from 'layouts/centered/centered.tmpl';

type TCenteredLayout = {
  content: Block
};

export class CenteredLayout extends Block<TCenteredLayout> {
  protected render(): DocumentFragment {
    return this.compile(centeredLayout, this.props);
  }
}
