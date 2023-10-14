import { Block } from 'classes/block';
import { infoInputTmpl } from 'pages/profile/components/info-input/info-input.tmpl';

type TInfoInput = {
  name: string;
  label: string;
  value: string;
  type?: string;
  readonly?: boolean;
};

export class InfoInput extends Block<TInfoInput> {
  protected render(): DocumentFragment {
    return this.compile(infoInputTmpl, this.props);
  }
}
