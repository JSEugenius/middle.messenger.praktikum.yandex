import { tmpl } from '../error-page.tmpl.ts';
import { Centered } from 'layouts/centered/centered.ts';
import { compileTemplate, createElement } from 'utils/handlebars-helpers.ts';
import { errorTmpl } from 'modules/error/error.tmpl.ts';
import { link as linkTmpl } from 'components/link/link.tmpl.ts';

export const NotFound = () => {
  const error = compileTemplate(errorTmpl);
  const link = compileTemplate(linkTmpl);

  const content = createElement(tmpl, {
    error: error({
      code: '404',
      description: 'Не туда попали',
      link: link({
        to: '/500',
        text: 'Назад к чатам',
      }),
    }),
  });
  return Centered(content);
};
