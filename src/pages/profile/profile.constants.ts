import imgSrc from 'media/my-avatar.jpg';
import { InputName } from '../../@types/enums';

export const INFO_INPUTS = [
  {
    label: 'Почта',
    value: 'pochta@yandex.ru',
    name: InputName.EMAIL,
  },
  {
    label: 'Логин',
    value: 'ivanivanov',
    name: InputName.LOGIN,
  },
  {
    label: 'Имя',
    value: 'Иван',
    name: InputName.FIRST_NAME,
  },
  {
    label: 'Фамилия',
    value: 'Иванов',
    name: InputName.SECOND_NAME,
  },
  {
    label: 'Имя в чате',
    value: 'Иван',
    name: InputName.DISPLAY_NAME,
  },
  {
    label: 'Телефон',
    value: '+7 (909) 967 30 30',
    name: InputName.PHONE,
  },
];

const PASSWORD_INPUTS = [
  {
    label: 'Старый пароль',
    value: 'пароль',
    name: InputName.OLD_PASSWORD,
  },
  {
    label: 'Новый пароль',
    value: 'новый пароль',
    name: InputName.NEW_PASSWORD,
  },
  {
    label: 'Повторите новый пароль',
    value: 'новый пароль',
    name: InputName.REPEAT_PASSWORD,
  },
];

export const HEADING_PROPS = {
  avatar: imgSrc,
  firstName: 'Евгений',
};

const BUTTON = {
  type: 'submit',
  text: 'Сохранить',
};

export const PROFILE_CHANGE_PROPS = {
  info: {
    ...HEADING_PROPS,
    inputs: INFO_INPUTS,
    button: BUTTON,
  },
  password: {
    ...HEADING_PROPS,
    inputs: PASSWORD_INPUTS,
    button: BUTTON,
  },
};

export const LINKS = [
  {
    to: '/profile-change',
    text: 'Изменить данные',
  },
  {
    to: '/password-change',
    text: 'Изменить пароль',
  },
  {
    to: '/sign-in',
    text: 'Выйти',
    accent: true,
  },
];
