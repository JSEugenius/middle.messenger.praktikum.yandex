import { Block } from 'classes/block';
import { fieldWithLinkTmpl } from 'pages/profile/components/field-with-link/field-with-link.tmpl';

type TFieldWithLink = {
  link: Block;
};

export class FieldWithLink extends Block<TFieldWithLink> {
  protected render(): DocumentFragment {
    return this.compile(fieldWithLinkTmpl, this.props);
  }
}
