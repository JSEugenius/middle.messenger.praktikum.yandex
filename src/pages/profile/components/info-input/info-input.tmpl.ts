import style from './info-input.module.scss';

// language=hbs
export const infoInputTmpl = `
    <li class="${style.root} {{wrapperClassName}}">
        <label for="{{name}}">{{label}}</label>
        <input 
            type="{{lookupOrDefault this 'type' 'text'}}" 
            class="${style.info_input}" 
            id="{{name}}" 
            name="{{name}}" 
            value="{{value}}"
            {{setBooleanAttribute this 'readonly'}}
        />
    </li>
`;
