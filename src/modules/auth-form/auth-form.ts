import { Block } from 'classes/block';
import { authFormTmpl } from 'modules/auth-form/auth-form.tmpl';

type TAuthFormModule = {
  title: string;
  button: Block;
  link: Block;
  inputs: Block[];
};

export class AuthFormModule extends Block<TAuthFormModule> {
  protected render(): DocumentFragment {
    return this.compile(authFormTmpl, this.props);
  }
}
