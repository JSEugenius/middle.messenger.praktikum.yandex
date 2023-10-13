export const AUTH_PROPS = {
  'sign-in': {
    title: 'Вход',
    inputs: [
      {
        name: 'login',
        label: 'Логин',
        type: 'text',
        error: 'Неверный логин или пароль',
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
        type: 'text',
      },
      {
        name: 'first_name',
        label: 'Имя',
        type: 'text',
      },
      {
        name: 'second_name',
        label: 'Фамилия',
        type: 'text',
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
