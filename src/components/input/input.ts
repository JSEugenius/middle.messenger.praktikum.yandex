import { Block } from 'classes/block';
import { inputTmpl } from 'components/input/input.tmpl';

export type TInput = {
  name: string;
  type?: string;
  value?: string;
  placeholder?: string;
  className?: string;
  onInput?: (event: Event) => void;
  onFocus?: (event: Event) => void;
  onBlur?: (event: Event) => void;
};

export class Input extends Block {
  constructor(props: TInput) {
    super({
      ...props,
      events: {
        input: props.onInput,
        focus: props.onFocus,
        blur: props.onBlur,
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(inputTmpl, this.props);
  }
}
