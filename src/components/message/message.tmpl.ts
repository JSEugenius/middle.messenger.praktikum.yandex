import style from './message.module.scss';

//language=hbs
export const messageTmpl = `
    {{#if own}}
        <div class="${style.root} ${style.root_own}">
            <p class="${style.message}">{{message}}</p>
            <time class="${style.time} ${style.time_own}">{{time}}</time>
        </div>
        {{else}}
        <div class="${style.root}">
            <p class="${style.message}">{{message}}</p>
            <time class="${style.time}">{{time}}</time>
        </div>
    {{/if}}
`;