import { Block } from 'classes/block';
import { inputTmpl } from 'components/input/input.tmpl';

export type TInput = {
  name: string;
  label: string;
  error?: string;
  type?: string;
};

export class Input extends Block<TInput> {
  protected render(): DocumentFragment {
    return this.compile(inputTmpl, this.props);
  }
}
