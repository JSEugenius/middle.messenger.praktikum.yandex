import { Block } from 'classes/block';
import { arrowButtonTmpl } from 'components/arrow-button/arrow-button.tmpl';

export class ArrowButton extends Block {
  protected render(): DocumentFragment {
    return this.compile(arrowButtonTmpl, {});
  }
}
