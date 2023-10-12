import { Block } from 'classes/block';
import { errorPageTmpl } from 'pages/errors/error-page.tmpl';

type TNotFound2 = {
  error: Block;
};

export class NotFound2 extends Block<TNotFound2> {
  protected render(): DocumentFragment {
    return this.compile(errorPageTmpl, this.props);
  }
}
