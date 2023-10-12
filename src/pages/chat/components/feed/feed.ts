import { Block } from 'classes/block';
import { feedTmpl } from 'pages/chat/components/feed/feed.tmpl';

type TFeed = {
  messages: Block[]
};

export class Feed extends Block<TFeed> {
  protected render(): DocumentFragment {
    return this.compile(feedTmpl, this.props);
  }
}
