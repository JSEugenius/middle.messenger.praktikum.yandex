import style from './message.module.scss';

//language=hbs
export const messageTmpl = `
    {{#if own}}
        <div class="${style.root} ${style.root_own}">
            <p class="${style.message}">{{text}}</p>
            <time class="${style.time} ${style.time_own}">{{time}}</time>
        </div>
        {{else}}
        <div class="${style.root}">
            <p class="${style.message}">{{text}}</p>
            <time class="${style.time}">{{time}}</time>
        </div>
    {{/if}}
`;

//language=hbs
export const messageWithImg = `
    <div class="${style.img_container}">
        <img class="${style.img}" src="{{imgSrc}}" alt="Фотография" />
        <div class="${style.overlay}">
            <time class="${style.time} ${style.time_img}">{{time}}</time>
        </div>
    </div>
`;