import { Block } from 'classes/block';
import { actionTmpl } from 'pages/profile/components/action/action.tmpl';

type TAction = {
  button: Block;
};

export class Action extends Block<TAction> {
  protected render(): DocumentFragment {
    return this.compile(actionTmpl, this.props);
  }
}
