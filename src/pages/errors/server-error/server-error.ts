import { errorPageTmpl } from '../error-page.tmpl.ts';
import { Centered } from 'layouts/centered/centered.ts';
import { createElement } from 'utils/create-element.ts';
import { errorTmpl } from 'modules/error/error.tmpl.ts';
import { linkTmpl } from 'components/link/link.tmpl.ts';

export const ServerError = () => {
  const link = createElement(linkTmpl, {
    to: '/chat',
    text: 'Назад к чатам',
  });

  const error = createElement(errorTmpl, {
    code: '500',
    description: 'Мы уже фиксим',
    link,
  });

  const content = createElement(errorPageTmpl, { error });

  return Centered(content);
};
