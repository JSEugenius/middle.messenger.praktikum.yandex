import style from './input.module.scss';

// language=hbs
export const inputTmpl = `
    <div class="${style.container}">
        <input class="${style.input}" id="{{name}}" name="{{name}}" type="{{lookupOrDefault this 'type' 'text'}}" placeholder=" " />
        <label class="${style.label}" for="{{name}}">{{label}}</label>
        {{#if error}}
            <p class="${style.error}">{{error}}</p>
        {{/if}}
    </div>
`;
