import { Centered } from 'layouts/centered/centered';
import { createElement } from 'utils/create-element';
import { errorTmpl } from 'modules/error/error.tmpl';
import { linkTmpl } from 'components/link/link.tmpl';
import { errorPageTmpl } from 'pages/errors/error-page.tmpl';

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
