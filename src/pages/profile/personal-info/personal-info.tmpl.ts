import style from '../profile.module.scss';

//language=hbs
export const main = `
    <div class="${style.main}">
        <div class="${style.heading}">
            {{{avatar}}}
            <h1 class="${style.title}">{{firstName}}</h1>
        </div>
        <ul class="${style.list}">
            {{#each profileInfo}}
                <li class="${style.field} ${style.list_item}">
                    <label for="{{name}}">{{title}}</label>
                    <input value="{{value}}" class="${style.info_input}" readonly />
                </li>
            {{/each}}
        </ul>
        <div class="${style.buttons_container}">
            {{#each buttons}}
                <div class="${style.field}">
                    {{{.}}}
                </div>
            {{/each}}
        </div>
    </div>
`;

//language=hbs
export const action = `
    <div class="${style.side}">
        {{{button}}}
    </div>
`;
