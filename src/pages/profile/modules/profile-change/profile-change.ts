import { Block } from 'classes/block';
import { profileChangeTmpl } from 'pages/profile/modules/profile-change/profile-change.tmpl';
import { validate } from 'utils/validate';
import { InputName } from '../../../../@types/enums';

type TProfileChangeModule = {
  heading: Block;
  inputs: Block[];
  button: Block;
};

export class ProfileChangeModule extends Block {
  constructor(props: TProfileChangeModule) {
    super({
      ...props,
      events: {
        submit: (event: Event) => {
          event.preventDefault();
          const fields = {} as Record<string, FormDataEntryValue>;
          const data = new FormData(event.target as HTMLFormElement);

          data.forEach((value, key) => {
            fields[key] = value;
          });

          const errorObj = validate(fields);

          const isValid = Object.values(errorObj).every((value) => value.length === 0);

          if (isValid) {
            delete fields[InputName.REPEAT_NEW_PASSWORD];
            console.log('Данные отправлены', fields);
          }
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(profileChangeTmpl, this.props);
  }
}
