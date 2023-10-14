import { buttonTmpl } from 'components/button/button.tmpl';
import { Block } from 'classes/block';

export type TButton = {
  text: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  events?: {
    click: () => void
  }
};

export class Button extends Block<TButton> {
  render() {
    return this.compile(buttonTmpl, this.props);
  }
}
