import style from './button.module.scss';

//language=hbs
export const button = `
    <button type="{{type}}" class="${style.button}">{{ text }}</button>
`;
