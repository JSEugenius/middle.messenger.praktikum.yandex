import style from './arrow-button.module.scss';

//language=hbs
export const arrowButton = `
    <button type="button" class="${style.button}">
        <svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="14" cy="14" r="14" transform="rotate(-180 14 14)" fill="#3369F3"/>
            <path fill="#fff" d="M20 14.8H9v-1.6h11z"/>
            <path d="m13 19-4-5 4-5" stroke="#fff" stroke-width="1.6"/>
        </svg>
    </button>
`;