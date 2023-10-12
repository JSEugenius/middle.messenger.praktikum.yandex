import style from './message.module.scss';

// language=hbs
export const messageTmpl = `
    {{#if own}}
        <li class="${style.root} ${style.root_own}">
            <p class="${style.message}">{{text}}</p>
            <time class="${style.time} ${style.time_own}">{{time}}</time>
        </li>
    {{else}}
        <li class="${style.root}">
            <p class="${style.message}">{{text}}</p>
            <time class="${style.time}">{{time}}</time>
        </li>
    {{/if}}
`;

// language=hbs
export const messageWithImg = `
    {{#if own}}
        <li class="${style.img_container} ${style.img_container_own}">
            <div class="${style.img_container}">
                <img class="${style.img}" src="{{imgSrc}}" alt="Фотография" />
                <div class="${style.overlay}">
                    <time class="${style.time} ${style.time_img}">{{time}}</time>
                </div>
            </div>
        </li>
    {{else}}
        <li class="${style.img_container}">
            <img class="${style.img}" src="{{imgSrc}}" alt="Фотография" />
            <div class="${style.overlay}">
                <time class="${style.time} ${style.time_img}">{{time}}</time>
            </div>
        </li>
    {{/if}}
`;
