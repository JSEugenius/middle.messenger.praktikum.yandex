import style from './button.module.scss';

// language=hbs
export const buttonTmpl = `
    <button type="{{lookupOrDefault this 'type' 'button'}}" class="${style.button}">{{ text }}</button>
`;
