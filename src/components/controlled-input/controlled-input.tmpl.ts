import style from './controlled-input.module.scss';

// language=hbs
export const controlledInputTmpl = `
    <div class="${style.root}">
        {{{label}}}
        {{{input}}}
        {{{error}}}
    </div>
`;
