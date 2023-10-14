import { Block } from 'classes/block';
import { avatarTmpl } from 'components/avatar/avatar.tmpl';

type TAvatar = {
  imgSrc: string;
};

export class Avatar extends Block<TAvatar> {
  protected render(): DocumentFragment {
    return this.compile(avatarTmpl, this.props);
  }
}
