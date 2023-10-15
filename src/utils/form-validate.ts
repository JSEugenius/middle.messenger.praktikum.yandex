import { validate } from 'utils/validate';
import { Block } from 'classes/block';
import { InputName } from 'constants/enums';

export const formValidate = (e: Event, inputs: Block[]) => {
  (e as Event).preventDefault();

  const fields = {} as Record<string, FormDataEntryValue>;
  const data = new FormData(e.target as HTMLFormElement);

  data.forEach((value, key) => {
    fields[key] = value;
  });

  const errorObj = validate(fields);

  inputs.forEach((input) => {
    (input.children.error as Block).setProps({
      error: errorObj[input.props.name as keyof typeof errorObj],
    });
  });

  const isValid = Object.values(errorObj).every((value) => value.length === 0);

  if (isValid) {
    delete fields[InputName.REPEAT_PASSWORD];
    console.log('Данные отправлены', fields);
  }
};
