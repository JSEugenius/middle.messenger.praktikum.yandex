import { Block } from 'classes/block';
import { actionsTmpl } from 'pages/chat/components/actions/actions.tmpl';

type TActions = {
  button: Block;
};

export class Actions extends Block<TActions> {
  protected render(): DocumentFragment {
    return this.compile(actionsTmpl, this.props);
  }
}
