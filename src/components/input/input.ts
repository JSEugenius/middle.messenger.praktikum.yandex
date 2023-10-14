import { Block } from 'classes/block';
import { inputTmpl } from 'components/input/input.tmpl';

export type TInput = {
  name: string;
  label: string;
  error?: string;
  type?: string;
  value?: string;
  onInput?: (event: any) => any;
  onFocus?: (event: any) => any;
  onBlur?: (event: any) => any;
};

export class Input extends Block<TInput> {
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
