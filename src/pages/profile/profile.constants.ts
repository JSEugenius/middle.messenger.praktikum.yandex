import imgSrc from 'media/my-avatar.jpg';
import { ButtonType, InputName } from '../../@types/enums';

export const INFO_INPUTS = [
  {
    label: 'Почта',
    value: 'pochta@yandex.ru',
    name: InputName.EMAIL,
  },
  {
    label: 'Логин',
    value: 'jseugenius',
    name: InputName.LOGIN,
  },
  {
    label: 'Имя',
    value: 'Евгений',
    name: InputName.FIRST_NAME,
  },
  {
    label: 'Фамилия',
    value: 'Новиков',
    name: InputName.SECOND_NAME,
  },
  {
    label: 'Имя в чате',
    value: 'Евгений',
    name: InputName.DISPLAY_NAME,
  },
  {
    label: 'Телефон',
    value: '+79099673030',
    name: InputName.PHONE,
  },
];

const PASSWORD_INPUTS = [
  {
    label: 'Старый пароль',
    value: 'пароль',
    name: InputName.OLD_PASSWORD,
    type: 'password',
  },
  {
    label: 'Новый пароль',
    value: 'новый пароль',
    name: InputName.NEW_PASSWORD,
    type: 'password',
  },
  {
    label: 'Повторите новый пароль',
    value: 'новый пароль',
    name: InputName.REPEAT_NEW_PASSWORD,
    type: 'password',
  },
];

export const HEADING_PROPS = {
  avatar: imgSrc,
  firstName: 'Евгений',
};

const BUTTON = {
  type: ButtonType.SUBMIT,
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
