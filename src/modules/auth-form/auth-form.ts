import { Block } from 'classes/block';
import { authFormTmpl } from 'modules/auth-form/auth-form.tmpl';
import { validateSubmit } from 'utils/validate-submit';

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
          validateSubmit(event, this.children.inputs as Block[]);
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(authFormTmpl, this.props);
  }
}
