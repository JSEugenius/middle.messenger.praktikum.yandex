export const AUTH_PROPS = {
  'sign-in': {
    title: 'Вход',
    inputs: [
      {
        name: 'login',
        label: 'Логин',
        error: 'Неверный логин или пароль',
        readonly: true,
      },
      {
        name: 'password',
        label: 'Пароль',
        type: 'password',
      },
    ],
    button: {
      text: 'Авторизоваться',
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
        name: 'email',
        label: 'Почта',
        type: 'email',
      },
      {
        name: 'login',
        label: 'Логин',
      },
      {
        name: 'first_name',
        label: 'Имя',
      },
      {
        name: 'second_name',
        label: 'Фамилия',
      },
      {
        name: 'phone',
        label: 'Телефон',
        type: 'tel',
      },
      {
        name: 'password',
        label: 'Пароль',
        type: 'password',
      },
      {
        name: 'repeat_password',
        label: 'Пароль (ещё раз)',
        type: 'password',
      },
    ],
    button: {
      text: 'Зарегистрироваться',
    },
    link: {
      to: '/sign-in',
      text: 'Войти',
    },
  },
};
