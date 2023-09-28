import { Centered } from 'layouts/centered/centered.ts';
import { createElement } from 'utils/create-element.ts';
import { errorPageTmpl } from '../error-page.tmpl.ts';
import { errorTmpl } from 'modules/error/error.tmpl.ts';
import { linkTmpl } from 'components/link/link.tmpl.ts';

export const NotFound = () => {
  const link = createElement(linkTmpl, {
    to: '/chat',
    text: 'Назад к чатам',
  });

  const error = createElement(errorTmpl, {
    code: '404',
    description: 'Не туда попали',
    link,
  });

  const content = createElement(errorPageTmpl, { error });

  return Centered(content);
};
