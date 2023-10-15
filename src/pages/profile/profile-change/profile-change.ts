import { ProfileChangeModule } from 'pages/profile/modules/profile-change/profile-change';
import { Action } from 'pages/profile/components/action/action';
import { MainLayout } from 'layouts/main/main';
import { Avatar } from 'components/avatar/avatar';
import { Button, TButton } from 'components/button/button';
import { PROFILE_CHANGE_PROPS } from 'pages/profile/profile.constants';
import { ArrowButton } from 'components/arrow-button/arrow-button';
import { Heading } from 'pages/profile/components/heading/heading';
import { InfoInput } from 'pages/profile/components/info-input/info-input';

export const ProfileChangePage = (page: keyof typeof PROFILE_CHANGE_PROPS) => {
  const props = PROFILE_CHANGE_PROPS[page];

  const heading = new Heading({
    avatar: new Avatar({ imgSrc: props.avatar }),
    firstName: 'Евгений',
  });

  const button = new Button({
    type: props.button.type as TButton['type'],
    text: props.button.text,
  });

  const inputs = props.inputs.map((input) => new InfoInput(input));

  const main = new ProfileChangeModule({
    heading,
    button,
    inputs,
  });

  const side = new Action({
    button: new ArrowButton({}),
  });

  return new MainLayout({ main, side });
};
