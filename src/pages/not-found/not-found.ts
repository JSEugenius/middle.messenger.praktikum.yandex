import { tmpl } from './not-found.tmpl';
import { Layout } from 'layout/layout';
import { compileTemplate, createElement } from 'utils/handlebars-helpers';
import { errorTmpl } from 'modules/error/error.tmpl';
import { tmpl as linkTmpl } from 'components/link/link.tmpl';

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
  return Layout(content);
};
