import style from './input.module.scss';

// language=hbs
export const inputTmpl = `
    <input class="${style.input}" id="{{name}}" name="{{name}}" type="{{lookupOrDefault this 'type' 'text'}}" placeholder=" " value="{{value}}" />
`;
