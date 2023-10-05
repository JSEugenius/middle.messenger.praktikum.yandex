import style from './link.module.scss';

// language=hbs
export const linkTmpl = `
    {{#if accent}}
        <a class="${style.accent}" href="{{to}}">{{text}}</a>
    {{else}}
        <a class="${style.main}" href="{{to}}">{{text}}</a>
    {{/if}}
`;
