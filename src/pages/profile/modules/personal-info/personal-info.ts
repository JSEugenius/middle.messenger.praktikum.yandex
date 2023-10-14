import { Block } from 'classes/block';
import { personalInfoTmpl } from 'pages/profile/modules/personal-info/personal-info.tmpl';

type TPersonalInfo = {
  heading: Block;
  inputs: Block[];
  links: Block[];
};

export class PersonalInfoModule extends Block<TPersonalInfo> {
  protected render(): DocumentFragment {
    return this.compile(personalInfoTmpl, this.props);
  }
}
