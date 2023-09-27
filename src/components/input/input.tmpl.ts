import style from './input.module.scss';
//language=hbs
export const inputTmpl = `
    <div class="${style.container}">
        <input class="${style.input}" id="{{name}}" name="{{name}}" type="{{type}}" placeholder=" " />
        <label class="${style.label}" for="{{name}}">{{label}}</label>
        {{#if error}}
            <p class="${style.error}">{{error}}</p>
        {{/if}}
    </div>
`;