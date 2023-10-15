import { Block } from 'classes/block';
import { authFormTmpl } from 'modules/auth-form/auth-form.tmpl';
import { formValidate } from 'utils/form-validate';

type TAuthFormModule = {
  title: string;
  button: Block;
  link: Block;
  inputs: Block[];
};

export class AuthFormModule extends Block {
  constructor(props: TAuthFormModule) {
    super({
      ...props,
      events: {
        submit: (event: Event) => {
          formValidate(event, this.children.inputs as Block[]);
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(authFormTmpl, this.props);
  }
}
