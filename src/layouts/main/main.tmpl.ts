import style from './main.module.scss';

//language=hbs
export const tmpl = `
    <div class="${style.root}">
        <aside class="${style.sidebar}">
            {{{side}}}
        </aside>
        <main class="${style.main}">
            {{{main}}}
        </main>
    </div>
`;