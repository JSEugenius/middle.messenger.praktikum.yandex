import { Block } from 'classes/block';
import { formTmpl } from 'modules/form/form.tmpl';

type TFormModule = {
  title: string;
  button: Block;
  link: Block;
  inputs: Block[];
};

export class FormModule extends Block<TFormModule> {
  protected render(): DocumentFragment {
    return this.compile(formTmpl, this.props);
  }
}
