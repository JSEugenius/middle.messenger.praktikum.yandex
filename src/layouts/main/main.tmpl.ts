import style from './main.module.scss';

//language=hbs
export const mainLayoutTmpl = `
    <div class="${style.root}">
        <aside class="${style.sidebar}">
            {{{side}}}
        </aside>
        <main class="${style.main}">
            {{{main}}}
        </main>
    </div>
`;
