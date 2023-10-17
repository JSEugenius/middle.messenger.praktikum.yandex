import style from '../../profile.module.scss';

// language=hbs
export const personalInfoTmpl = `
    <div class="${style.main}">
        {{{heading}}}
        <ul class="${style.list}">
            {{#each inputs}}
                {{{this}}}
            {{/each}}
        </ul>
        <div class="${style.buttons_container}">
            {{#each links}}
                {{{this}}}
            {{/each}}
        </div>
    </div>
`;
