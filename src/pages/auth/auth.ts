import { AuthFormModule } from 'modules/auth-form/auth-form';
import { CenteredLayout } from 'layouts/centered/centered';
import { Button } from 'components/button/button';
import { Link } from 'components/link/link';
import { AUTH_PROPS } from 'pages/auth/auth.constants';
import { ControlledInput, TControlledInput } from 'components/controlled-input/controlled-input';

// eslint-disable-next-line max-len
const createInputs = (inputs: TControlledInput[]) => inputs.map((props) => new ControlledInput(props));

export const AuthPage = (props: keyof typeof AUTH_PROPS) => {
  const content = new AuthFormModule({
    title: AUTH_PROPS[props].title,
    inputs: createInputs(AUTH_PROPS[props].inputs),
    button: new Button(AUTH_PROPS[props].button),
    link: new Link({ ...AUTH_PROPS[props].link }),
  });

  return new CenteredLayout({ content });
};
