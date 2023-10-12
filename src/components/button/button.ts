import { buttonTmpl } from 'components/button/button.tmpl';
import { Block } from 'classes/block';

type TButton = {
  text: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  events?: {
    click: () => void
  }
};

export class Button extends Block<TButton> {
  constructor(props: TButton) {
    super({
      ...props,
      type: props.type || 'button',
    });
  }

  render() {
    return this.compile(buttonTmpl, this.props);
  }
}
