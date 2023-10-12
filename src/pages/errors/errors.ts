import { Block } from 'classes/block';
import { ErrorModule, TErrorModule } from 'modules/error/error';
import { errorPageTmpl } from 'pages/errors/error-page.tmpl';

type TErrors = {
  error: Block
} & TErrorModule;

export class Errors extends Block<TErrors> {
  constructor(props: TErrors) {
    super(props);
  }

  protected render(): DocumentFragment {
    this.children.error = new ErrorModule({
      code: this.props.code,
      description: this.props.description,
      link: {
        to: this.props.link.to,
        text: this.props.link.text,
      },
    });

    return this.compile(errorPageTmpl, {
      code: this.props.code,
      description: this.props.description,
      link: {
        to: this.props.link.to,
        text: this.props.link.text,
      },
      error: this.children.error,
    });
  }
}
