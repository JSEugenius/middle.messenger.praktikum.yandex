import { PersonalInfoModule } from 'pages/profile/modules/personal-info/personal-info';
import { HEADING_PROPS, INFO_INPUTS, LINKS } from 'pages/profile/profile.constants';
import { InfoInput } from 'pages/profile/components/info-input/info-input';
import { FieldWithLink } from 'pages/profile/components/field-with-link/field-with-link';
import { Link } from 'components/link/link';
import { Heading } from 'pages/profile/components/heading/heading';
import { Avatar } from 'components/avatar/avatar';
import { Action } from 'pages/profile/components/action/action';
import { ArrowButton } from 'components/arrow-button/arrow-button';
import { MainLayout } from 'layouts/main/main';
import style from '../profile.module.scss';

export const PersonalInfoPage = () => {
  const heading = new Heading({
    avatar: new Avatar({ imgSrc: HEADING_PROPS.avatar }),
    firstName: HEADING_PROPS.firstName,
  });

  const inputs = INFO_INPUTS.map((inputProps) => {
    const props = {
      ...inputProps,
      wrapperClassName: style.list_item,
      readonly: true,
    };
    return new InfoInput(props);
  });

  const links = LINKS.map((linkProps) => {
    const link = new Link(linkProps);
    return new FieldWithLink({ link });
  });

  const main = new PersonalInfoModule({ heading, inputs, links });

  const side = new Action({
    button: new ArrowButton({}),
  });

  return new MainLayout({ main, side });
};
