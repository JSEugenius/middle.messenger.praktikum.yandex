import { tmpl } from '../error-page.tmpl.ts';
import { Layout } from 'layout/layout.ts';
import { compileTemplate, createElement } from 'utils/handlebars-helpers.ts';
import { errorTmpl } from 'modules/error/error.tmpl.ts';
import { link as linkTmpl } from 'components/link/link.tmpl.ts';

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
