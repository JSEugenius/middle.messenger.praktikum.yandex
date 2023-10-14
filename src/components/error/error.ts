import { Block } from 'classes/block';
import { errorTmpl } from 'components/error/error.tmpl';

type TError = {
  error: string;
};

export class ErrorComponent extends Block<TError> {
  protected render(): DocumentFragment {
    return this.compile(errorTmpl, this.props);
  }
}
