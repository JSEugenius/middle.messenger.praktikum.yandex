import style from '../../profile.module.scss';

// language=hbs
export const profileChangeTmpl = `
    <div class="${style.main}">
        <div class="${style.heading}">
            {{{avatar}}}
            <h1 class="${style.title}">{{firstName}}</h1>
        </div>
        <form class="${style.form}">
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
        </form>
    </div>
`;
