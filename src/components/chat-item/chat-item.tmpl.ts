import style from './chat-item.module.scss';

// language=hbs
export const chatItemTmpl = `
    <li class="${style.root} {{wrapperClassName}}">
        <div class="${style.avatar_container}">
            {{#if avatar}}
                <img class="${style.avatar}" src="{{avatar}}" alt="Иконка чата" />
            {{/if}}
        </div>
        <div class="${style.content}">
          <div class="${style.top_container}">
              <h2 class="${style.title}">{{title}}</h2>
              <time class="${style.time}">{{time}}</time>
          </div>
          <div class="${style.bottom_container}">
              <div class="${style.message_container}">
                  <p class="${style.message}">{{message}}</p>
              </div>
              {{#if count}}
                  <div class="${style.count_container}">
                      <span class="${style.count}">{{count}}</span>
                  </div>
              {{/if}}
          </div>
        </div>
    </li>
`;
