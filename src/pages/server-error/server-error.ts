import { tmpl } from './server-error.tmpl';
import { Layout } from 'layout/layout';
import { compileTemplate, createElement } from 'utils/handlebars-helpers';
import { errorTmpl } from 'modules/error/error.tmpl';
import { tmpl as linkTmpl } from 'components/link/link.tmpl';

export const ServerError = () => {
  const error = compileTemplate(errorTmpl);
  const link = compileTemplate(linkTmpl);

  const content = createElement(tmpl, {
    error: error({
      code: '500',
      description: 'Мы уже фиксим',
      link: link({
        to: '/404',
        text: 'Назад к чатам',
      }),
    }),
  });
  return Layout(content);
};
