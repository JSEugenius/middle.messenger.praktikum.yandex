import style from '../../profile.module.scss';

// language=hbs
export const profileChangeTmpl = `
    <div class="${style.main}">
        {{{heading}}}
        <form class="${style.form}" novalidate method="post">
            <ul class="${style.list} ${style.list_change}">
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
