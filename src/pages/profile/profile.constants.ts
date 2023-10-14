import imgSrc from 'media/my-avatar.jpg';

export const INFO_INPUTS = [
  {
    label: 'Почта',
    value: 'pochta@yandex.ru',
    name: 'email',
  },
  {
    label: 'Логин',
    value: 'ivanivanov',
    name: 'login',
  },
  {
    label: 'Имя',
    value: 'Иван',
    name: 'first_name',
  },
  {
    label: 'Фамилия',
    value: 'Иванов',
    name: 'second_name',
  },
  {
    label: 'Имя в чате',
    value: 'Иван',
    name: 'display_name',
  },
  {
    label: 'Телефон',
    value: '+7 (909) 967 30 30',
    name: 'phone',
  },
];

const PASSWORD_INPUTS = [
  {
    label: 'Старый пароль',
    value: 'пароль',
    name: 'oldPassword',
  },
  {
    label: 'Новый пароль',
    value: 'новый пароль',
    name: 'newPassword',
  },
  {
    label: 'Повторите новый пароль',
    value: 'новый пароль',
    name: 'repeat-password',
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
