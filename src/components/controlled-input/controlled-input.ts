import { Block } from 'classes/block';
import { Input, TInput } from 'components/input/input';
import { controlledInputTmpl } from 'components/controlled-input/controlled-input.tmpl';
import { Label } from 'components/label/label';
import { ErrorComponent } from 'components/error/error';

type TControlledInput = {
  isError?: boolean;
  onBlur?: (event: any) => any;
} & TInput;

export class ControlledInput extends Block<TControlledInput> {
  protected init() {
    this.children.input = new Input({
      ...this.props,
      onBlur: (e) => {
        if (e.target.value.length > 1) {
          this.children.error.setProps({
            error: 'AsdasdasdAS',
          });
        }
      },
      onFocus: (e) => {
        this.children.error.setProps({
          error: '',
        });
      },
    });
    this.children.label = new Label({
      label: this.props.label,
      name: this.props.name,
    });
    this.children.error = new ErrorComponent({
      error: '',
    });
  }

  protected render(): DocumentFragment {
    return this.compile(controlledInputTmpl, this.props);
  }
}
