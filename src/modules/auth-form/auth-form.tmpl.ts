import style from './auth-form.module.scss';

// language=hbs
export const authFormTmpl = `
    <article class="${style.root}">
        <h1 class="${style.title}">{{title}}</h1>
        <form class="${style.form}" method="post" novalidate>
            <div class="${style.input_container}">
                {{#each inputs}}
                    {{{this}}}
                {{/each}}
            </div>
            <div class="${style.button_container}">
                {{{button}}}
                {{{link}}}
            </div>
        </form>
    </article>
`;
