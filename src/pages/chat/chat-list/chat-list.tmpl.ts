import searchSrc from 'media/search-icon.svg';
import arrowSrc from 'media/arrow-right.svg';
import style from './chat-list.module.scss';

// language=hbs
export const chatListTmpl = `
    <div class="${style.root}">
        <div class="${style.side_header}">
            <a class="${style.link}" href="/profile">
                <span>В профиль</span>
                <div class="${style.arrow_icon_wrapper}">
                    <img src="${arrowSrc}" alt="В профиль" />
                </div>
            </a>
            <div class="${style.search}">
                <input class="${style.input}" type="text" placeholder="Поиск" autocomplete="off">
                <img src="${searchSrc}" alt="Поиск" class="${style.search_icon}" />
            </div>
        </div>
        <ul class="${style.list}">
            {{#each chatList}}
                {{{this}}}
            {{/each}}
        </ul>
    </div>
`;
