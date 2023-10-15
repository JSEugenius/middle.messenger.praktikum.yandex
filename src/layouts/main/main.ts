import { Block } from 'classes/block';
import { mainLayoutTmpl } from 'layouts/main/main.tmpl';

type TMainLayout = {
  main: Block;
  side: Block;
};

export class MainLayout extends Block<TMainLayout> {
  protected render(): DocumentFragment {
    return this.compile(mainLayoutTmpl, this.props);
  }
}
