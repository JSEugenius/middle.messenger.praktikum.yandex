import style from './button.module.scss';

//language=hbs
export const buttonTmpl = `
    <button type="{{type}}" class="${style.button}">{{ text }}</button>
`;
