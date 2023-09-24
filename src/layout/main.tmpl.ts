import style from './main.module.scss';

//language=hbs
export const tmpl = `
    <div class="${style.root}">
        <aside class="${style.sidebar}">
            {{{sideContent}}}
        </aside>
        <main class="${style.main}">
            {{{mainContent}}}
        </main>
    </div>
`;