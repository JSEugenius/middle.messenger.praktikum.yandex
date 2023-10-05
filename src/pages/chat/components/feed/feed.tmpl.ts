import style from './feed.module.scss';

// language=hbs
export const feedTmpl = `
    <div class="${style.root}">
        <ul class="${style.feed}">
            {{#each messages}}
                {{#if own}}
                    <li class="${style.message} ${style.message_own}">
                        {{{content}}}
                    </li>
                {{else}}
                    <li class="${style.message}">
                        {{{content}}}
                    </li>
                {{/if}}
            {{/each}}
        </ul>
    </div>
`;
