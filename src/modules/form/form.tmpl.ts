import style from './form.module.scss';

// language=hbs
export const formTmpl = `
    <article class="${style.root}">
        <h1 class="${style.title}">{{title}}</h1>
        <form class="${style.form}">
            <div class="${style.input_container}">
                {{#each inputs}}
                    {{{.}}}
                {{/each}}
            </div>
            <div class="${style.button_container}">
                {{#each buttons}}
                    {{{.}}}
                {{/each}}
            </div>
        </form>
    </article>
`;
