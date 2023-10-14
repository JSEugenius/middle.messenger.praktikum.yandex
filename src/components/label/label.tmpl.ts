import style from './label.module.scss';

// language=hbs
export const labelTmpl = `
    <label class="${style.label}" for="{{name}}">{{label}}</label>
`;
