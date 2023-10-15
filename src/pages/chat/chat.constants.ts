import avatarImg from 'media/my-avatar.jpg';
import photoSrc from 'media/photo-message.png';

/** =================================================================================== */
const createList = (size: number, obj: object | object[]) => {
  const result = [];

  for (let i = 0; i < size; i += 1) {
    if (Array.isArray(obj)) {
      result.push(...obj);
    } else {
      result.push(obj);
    }
  }

  return result;
};
/** =================================================================================== */

export const CHAT_LIST = createList(15, [
  {
    title: 'Евгений',
    time: '15:12',
    message: 'Друзья, у меня для вас особенный выпуск новостей!',
    count: 4,
    avatar: avatarImg,
  },
  {
    title: 'Евгений',
    time: '15:12',
    message: 'Друзья, у меня для вас особенный выпуск новостей!',
    count: 4,
  },
]);

export const MESSAGES = createList(10, [
  {
    text: `Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила 
    Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали 
    с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, 
    так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, 
    но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них 
    недавно продали на аукционе за 45000 евро.`,
    time: '11:56',
  },
  {
    imgSrc: photoSrc,
    time: '11:56',
  },
  {
    text: 'Круто!',
    time: '12:00',
    own: true,
  },
]);

export const HEADER_PROPS = {
  header: {
    avatar: avatarImg,
    title: 'Евгений',
  },
  messages: MESSAGES,
};
