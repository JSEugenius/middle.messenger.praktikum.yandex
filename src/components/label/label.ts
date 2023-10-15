import { Block } from 'classes/block';
import { labelTmpl } from 'components/label/label.tmpl';

export type TLabel = {
  name: string;
  label: string;
  className?: string;
};

export class Label extends Block<TLabel> {
  protected render(): DocumentFragment {
    return this.compile(labelTmpl, this.props);
  }
}
