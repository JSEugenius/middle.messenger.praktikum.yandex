import style from './header.module.scss';

// language=hbs
export const headerTmpl = `
    <div class="${style.header}">
        <div class="${style.chat_info}">
            <div class="${style.avatar_container}">
                {{#if avatar}}
                    <img class="${style.avatar}" src="{{avatar}}" alt="Иконка чата" />
                {{/if}}
            </div>
            <h2 class="${style.title}">{{title}}</h2>
        </div>
        <button type="button" class="${style.settings_button}">
            <svg width="3" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="1.5" cy="2" r="1.5" fill="#1E1E1E"/>
                <circle cx="1.5" cy="8" r="1.5" fill="#1E1E1E"/>
                <circle cx="1.5" cy="14" r="1.5" fill="#1E1E1E"/>
            </svg>
        </button>
    </div>
`;
