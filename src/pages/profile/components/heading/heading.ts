import { Block } from 'classes/block';
import { headingTmpl } from 'pages/profile/components/heading/heading.tmpl';

type THeading = {
  avatar: Block;
  firstName: string;
};

export class Heading extends Block<THeading> {
  protected render(): DocumentFragment {
    return this.compile(headingTmpl, this.props);
  }
}
