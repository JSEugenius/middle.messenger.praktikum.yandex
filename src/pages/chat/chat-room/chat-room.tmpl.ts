import style from './chat-room.module.scss';

//language=hbs
export const main = `
    <div class="root">
        <div class="header">
            <div class="header_container">
                <div class="${style.avatar_container}">
                    {{#if avatar}}
                        <img class="${style.avatar}" src="{{avatar}}" alt="Иконка чата" />
                    {{/if}}
                </div>
            </div>
        </div>
        <div class="feed">feed</div>
        <div class="actions">actions</div>
    </div>
`;