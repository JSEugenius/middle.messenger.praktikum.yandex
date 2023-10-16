import { InputName } from 'constants/enums';

type TFields = Partial<Record<InputName, string>>;

type TValidationObject = Record<InputName, string>;

/** ============================================================================================= */
const createResultMessage = (array: string[]): string => array.filter((message) => message.length > 0).join('. ');

/** ============================================================================================= */
const checkIsEmpty = (value: string): string | null => {
  if (value.length < 1) {
    return 'Поле не должно быть пустым';
  }
  return null;
};

/** ============================================================================================= */
const checkLength = ({
  result, min, max, value,
}: { result: string[], value: string, min: number, max: number }): void => {
  if (value.length < min) {
    result.push(`Должно быть больше ${min} символов`);
  }
  if (value.length > max) {
    result.push(`Разрешено не более ${max} символов`);
  }
};

/** ============================================================================================= */
const loginValidate = (value: string): string => {
  const MAX_LENGTH = 20;
  const MIN_LENGTH = 3;
  const checkOnlyNumber = /^\d+$/;
  const checkValidCharacter = /^[a-zA-Z0-9_-]*$/;
  const result: string[] = [];
  const emptyError = checkIsEmpty(value);

  if (emptyError) {
    return emptyError;
  }

  checkLength({
    result, value, max: MAX_LENGTH, min: MIN_LENGTH,
  });

  if (checkOnlyNumber.test(value)) {
    result.push('Не должен состоять только из цифр');
  }
  if (!checkValidCharacter.test(value)) {
    result.push('Здесь недопустимые символы');
  }

  return createResultMessage(result);
};

/** ============================================================================================= */
const nameValidate = (value: string): string => {
  const checkFirstCapitalLetter = /^[A-ZА-ЯЁ]+/;
  const checkValid = /^[a-zA-Zа-яёА-ЯЁ-]+$/;
  const result: string[] = [];
  const emptyError = checkIsEmpty(value);

  if (emptyError) {
    return emptyError;
  }
  if (!checkFirstCapitalLetter.test(value)) {
    result.push('Должно начинаться с заглавной буквы');
  }
  if (!checkValid.test(value)) {
    result.push('Здесь недопустимые символы');
  }

  return createResultMessage(result);
};

/** ============================================================================================= */
const emailValidate = (value: string): string => {
  const checkValid = /^[a-zA-Z._0-9-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/g;
  const result: string[] = [];
  const emptyError = checkIsEmpty(value);

  if (emptyError) {
    return emptyError;
  }
  if (!checkValid.test(value)) {
    result.push('Недопустимый формат');
  }

  return createResultMessage(result);
};

/** ============================================================================================= */
const passwordValidate = (value: string): string => {
  const MAX_LENGTH = 40;
  const MIN_LENGTH = 8;
  const checkCapitalLetter = /[A-ZА-ЯЁ]+/;
  const checkDigit = /\d/;
  const result: string[] = [];
  const emptyError = checkIsEmpty(value);

  if (emptyError) {
    return emptyError;
  }
  if (!checkCapitalLetter.test(value)) {
    result.push('Нужна хотя бы одна заглавная бука');
  }
  if (!checkDigit.test(value)) {
    result.push('Должна быть хотя бы одна цифра');
  }

  checkLength({
    result, value, max: MAX_LENGTH, min: MIN_LENGTH,
  });

  return createResultMessage(result);
};

/** ============================================================================================= */
export const phoneValidate = (value: string): string => {
  const MAX_LENGTH = 15;
  const MIN_LENGTH = 10;
  const checkValid = /^\+?\d+$/;
  const result: string[] = [];
  const emptyError = checkIsEmpty(value);

  if (emptyError) {
    return emptyError;
  }

  if (!checkValid.test(value)) {
    result.push('Здесь недопустимые символы');
  }

  checkLength({
    result, value, max: MAX_LENGTH, min: MIN_LENGTH,
  });

  return createResultMessage(result);
};

/** ============================================================================================= */
const repeatPasswordValidate = (value: string): string => {
  const result: string[] = [];
  const password = document.getElementsByName(InputName.PASSWORD)[0] as HTMLInputElement;

  if (value !== password.value) {
    result.push('Пароли не совпадают');
  }

  return createResultMessage(result);
};

/** ============================================================================================= */
const repeatNewPasswordValidate = (value: string): string => {
  const result: string[] = [];
  const password = document.getElementsByName(InputName.NEW_PASSWORD)[0] as HTMLInputElement;

  if (value !== password.value) {
    result.push('Пароли не совпадают');
  }

  return createResultMessage(result);
};

/** ============================================================================================= */
export const validate = (fields: TFields): TValidationObject => {
  const result = {} as TValidationObject;

  Object.entries(fields).forEach(([name, value]) => {
    switch (name) {
      case InputName.LOGIN: {
        result[name] = loginValidate(value);
        break;
      }
      case InputName.EMAIL: {
        result[name] = emailValidate(value);
        break;
      }
      case InputName.DISPLAY_NAME: {
        result[name] = nameValidate(value);
        break;
      }
      case InputName.PASSWORD: {
        result[name] = passwordValidate(value);
        break;
      }
      case InputName.OLD_PASSWORD: {
        result[name] = passwordValidate(value);
        break;
      }
      case InputName.NEW_PASSWORD: {
        result[name] = passwordValidate(value);
        break;
      }
      case InputName.REPEAT_PASSWORD: {
        result[name] = repeatPasswordValidate(value);
        break;
      }
      case InputName.REPEAT_NEW_PASSWORD: {
        result[name] = repeatNewPasswordValidate(value);
        break;
      }
      case InputName.FIRST_NAME: {
        result[name] = nameValidate(value);
        break;
      }
      case InputName.SECOND_NAME: {
        result[name] = nameValidate(value);
        break;
      }
      case InputName.PHONE: {
        result[name] = phoneValidate(value);
        break;
      }
      default:
        break;
    }
  });

  return result;
};
