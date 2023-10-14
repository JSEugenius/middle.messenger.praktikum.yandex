import style from './profile-change.module.scss';

// language=hbs
export const profileChangeTmpl = `
    <div class="${style.main}">
        {{{heading}}}
        <form class="${style.form}">
            <ul class="${style.list}">
                {{#each inputs}}
                    {{{this}}}
                {{/each}}
            </ul>
            <div class="${style.button_wrapper}">
                {{{button}}}
            </div>
        </form>
    </div>
`;
