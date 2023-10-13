import { ErrorModule } from 'modules/error/error';
import { CenteredLayout } from 'layouts/centered/centered2';
import { ERRORS_PROPS } from 'pages/errors/errors.constants';

export const ErrorPage = (code: keyof typeof ERRORS_PROPS) => {
  const props = ERRORS_PROPS[code];

  const content = new ErrorModule(props);

  return new CenteredLayout({ content });
};
