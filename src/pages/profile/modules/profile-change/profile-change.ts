import { Block } from 'classes/block';
import { profileChangeTmpl } from 'pages/profile/modules/profile-change/profile-change.tmpl';

type TProfileChangeModule = {
  heading: Block;
  inputs: Block[];
  button: Block;
};

export class ProfileChangeModule extends Block<TProfileChangeModule> {
  protected render(): DocumentFragment {
    return this.compile(profileChangeTmpl, this.props);
  }
}
