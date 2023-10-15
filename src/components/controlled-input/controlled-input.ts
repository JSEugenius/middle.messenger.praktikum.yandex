import { Block } from 'classes/block';
import { Input, TInput } from 'components/input/input';
import { controlledInputTmpl } from 'components/controlled-input/controlled-input.tmpl';
import { Label, TLabel } from 'components/label/label';
import { ErrorComponent } from 'components/error/error';
import { validate } from 'utils/validate';
import style from './controlled-input.module.scss';
import { InputName } from '../../@types/enums';

export type TControlledInput = Omit<(TInput & TLabel), 'className'>;

export class ControlledInput extends Block<TControlledInput> {
  protected init() {
    this.children.input = new Input({
      name: this.props.name,
      value: this.props.value,
      type: this.props.type,
      className: style.input,

      onBlur: (e) => {
        const element = e.target as HTMLInputElement;

        const errorObj = validate({ [this.props.name]: element.value });

        if (errorObj[this.props.name as InputName]) {
          (this.children.error as Block).setProps({
            error: errorObj[this.props.name as InputName],
          });
        }
      },

      onFocus: () => {
        (this.children.error as Block).setProps({
          error: '',
        });
      },
    });

    this.children.label = new Label({
      label: this.props.label,
      name: this.props.name,
      className: style.label,
    });

    this.children.error = new ErrorComponent({
      error: '',
    });
  }

  protected render(): DocumentFragment {
    return this.compile(controlledInputTmpl, this.props);
  }
}
