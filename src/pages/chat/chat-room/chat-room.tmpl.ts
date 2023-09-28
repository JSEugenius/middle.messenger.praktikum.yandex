import style from './chat-room.module.scss';

//language=hbs
export const chatRoomTmpl = `
    <div class="${style.root}">
        {{{header}}}
        {{{feed}}}
        {{{actions}}}
    </div>
`;
