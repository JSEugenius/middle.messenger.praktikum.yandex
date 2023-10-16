import { Block } from 'classes/block';
import { profileChangeTmpl } from 'pages/profile/modules/profile-change/profile-change.tmpl';
import { validateSubmit } from 'utils/validate-submit';

type TProfileChangeModule = {
  heading: Block;
  inputs: Block[];
  button: Block;
};

export class ProfileChangeModule extends Block {
  constructor(props: TProfileChangeModule) {
    super({
      ...props,
      events: {
        submit: (event: Event) => {
          validateSubmit(event, props.inputs);
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(profileChangeTmpl, this.props);
  }
}
