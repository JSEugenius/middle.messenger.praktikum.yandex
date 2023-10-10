import { buttonTmpl } from 'components/button/button.tmpl';
import { Block } from '../../classes/block';

export class Button extends Block<any> {
  constructor(props: any) {
    super('button', props);
  }

  render() {
    return this.compile(buttonTmpl, this.props);
  }
}
