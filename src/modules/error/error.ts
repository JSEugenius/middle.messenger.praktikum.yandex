import { Block } from 'classes/block';
import { errorTmpl } from 'modules/error/error.tmpl';
import { Link } from 'components/link/link';

export type TErrorModule = {
  code: string;
  description: string;
  link: {
    to: string;
    text: string;
    accent?: boolean
  }
};

export class ErrorModule extends Block<TErrorModule> {
  init() {
    this.children.link = new Link({
      text: this.props.link.text,
      to: this.props.link.to,
      accent: this.props.link.accent,
    });
  }

  protected render(): DocumentFragment {
    return this.compile(errorTmpl, this.props);
  }
}
