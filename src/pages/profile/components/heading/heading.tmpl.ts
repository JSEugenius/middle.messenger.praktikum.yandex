import style from './heading.module.scss';

// language=hbs
export const headingTmpl = `
    <div class="${style.root}">
        {{{avatar}}}
        <h1 class="${style.title}">{{firstName}}</h1>
    </div>
`;
