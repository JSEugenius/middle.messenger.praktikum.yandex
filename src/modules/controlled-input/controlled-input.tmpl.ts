import style from './controlled-input.module.scss';

// language=hbs
export const controlledInputTmpl = `
    <div class="${style.root}">
        {{{input}}}
        {{{label}}}
        {{{error}}}
    </div>
`;
