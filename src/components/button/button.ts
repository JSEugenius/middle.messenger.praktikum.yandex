import { buttonTmpl } from 'components/button/button.tmpl';
import { Block } from 'classes/block';
import { ButtonType } from 'constants/enums';

export type TButton = {
  text: string;
  type?: ButtonType;
  events?: {
    click: () => void
  }
};

export class Button extends Block<TButton> {
  render() {
    return this.compile(buttonTmpl, this.props);
  }
}
