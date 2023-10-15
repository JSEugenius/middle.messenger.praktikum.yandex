import { ButtonType, InputName } from '../../@types/enums';

export const AUTH_PROPS = {
  'sign-in': {
    title: 'Вход',
    inputs: [
      {
        name: InputName.LOGIN,
        label: 'Логин',
        error: 'Неверный логин или пароль',
      },
      {
        name: InputName.PASSWORD,
        label: 'Пароль',
        type: 'password',
      },
    ],
    button: {
      text: 'Авторизоваться',
      type: ButtonType.SUBMIT,
    },
    link: {
      to: '/sign-up',
      text: 'Нет аккаунта?',
    },
  },
  'sign-up': {
    title: 'Регистрация',
    inputs: [
      {
        name: InputName.EMAIL,
        label: 'Почта',
        type: 'email',
      },
      {
        name: InputName.LOGIN,
        label: 'Логин',
      },
      {
        name: InputName.FIRST_NAME,
        label: 'Имя',
      },
      {
        name: InputName.SECOND_NAME,
        label: 'Фамилия',
      },
      {
        name: InputName.PHONE,
        label: 'Телефон',
        type: 'tel',
      },
      {
        name: InputName.PASSWORD,
        label: 'Пароль',
        type: 'password',
      },
      {
        name: InputName.REPEAT_PASSWORD,
        label: 'Пароль (ещё раз)',
        type: 'password',
      },
    ],
    button: {
      text: 'Зарегистрироваться',
      type: ButtonType.SUBMIT,
    },
    link: {
      to: '/sign-in',
      text: 'Войти',
    },
  },
};
