import { AuthFormModule } from 'modules/auth-form/auth-form';
import { CenteredLayout } from 'layouts/centered/centered2';
import { Input, TInput } from 'components/input/input';
import { Button } from 'components/button/button';
import { Link } from 'components/link/link';
import { AUTH_PROPS } from 'pages/auth/auth.constants';

const createInputs = (inputs: TInput[]) => inputs.map((props) => new Input(props));

export const AuthPage = (props: keyof typeof AUTH_PROPS) => {
  const content = new AuthFormModule({
    title: AUTH_PROPS[props].title,
    inputs: createInputs(AUTH_PROPS[props].inputs),
    button: new Button(AUTH_PROPS[props].button),
    link: new Link(AUTH_PROPS[props].link),
  });

  return new CenteredLayout({ content });
};
