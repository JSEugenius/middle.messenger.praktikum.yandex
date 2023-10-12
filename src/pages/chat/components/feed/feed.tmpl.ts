import style from './feed.module.scss';

// language=hbs
export const feedTmpl = `
    <div class="${style.root}">
        <ul class="${style.feed}">
            {{#each messages}}
                <li class="${style.message}">
                    {{{.}}}
                </li>
            {{/each}}
        </ul>
    </div>
`;
