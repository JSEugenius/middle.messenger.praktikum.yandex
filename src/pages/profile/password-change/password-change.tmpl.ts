import style from '../profile.module.scss';

//language=hbs
export const main = `
    <div class="${style.main}">
        <div class="${style.heading}">
            {{{avatar}}}
            <h1 class="${style.title}">{{firstName}}</h1>
        </div>
        <ul class="${style.list}">
            {{#each passwordItems}}
                <li class="${style.field} ${style.list_item}">
                    <label for="{{name}}">{{title}}</label>
                    <input type="password" class="${style.info_input}" id="{{name}}" name="{{name}}" value="{{value}}" />
                </li>
            {{/each}}
        </ul>
        <div class="${style.button_wrapper}">
            {{{button}}}
        </div>
    </div>
`;

//language=hbs
export const action = `
    <div class="${style.side}">
        {{{button}}}
    </div>
`;