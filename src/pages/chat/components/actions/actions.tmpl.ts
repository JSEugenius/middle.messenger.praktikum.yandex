import style from './actions.module.scss';

// language=hbs
export const actionsTmpl = `
    <form class="${style.actions}">
        <div class="${style.clip_button}">
            <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g fill-rule="evenodd" clip-rule="evenodd" fill="#3369F3">
                    <path d="m7.187 13.5 7.576-7.576.943.943-7.577 7.576-.942-.943ZM9.7 16.014l7.577-7.576.943.943-7.576 7.576-.943-.943ZM15.043 21.357l7.576-7.576.943.942-7.576 7.576-.943-.942ZM17.557 23.87l7.577-7.576.942.943-7.576 7.576-.943-.942Z"/>
                    <path d="M17.557 23.87c-2.615 2.616-6.845 2.625-9.449.022-2.603-2.604-2.594-6.834.021-9.45l-.942-.942c-3.139 3.138-3.15 8.215-.026 11.339 3.125 3.124 8.201 3.113 11.34-.025l-.944-.943ZM22.62 13.78l.942.943c2.441-2.44 2.45-6.389.02-8.819-2.43-2.43-6.379-2.421-8.82.02l.944.943c1.917-1.918 5.02-1.925 6.929-.016 1.91 1.91 1.902 5.012-.016 6.93Z"/>
                    <path d="M9.7 16.014c-1.742 1.744-1.749 4.564-.013 6.3 1.736 1.735 4.556 1.73 6.3-.014l-.944-.943a3.118 3.118 0 0 1-4.41.01 3.118 3.118 0 0 1 .01-4.41l-.942-.943Z"/>
                </g>
            </svg>
        </div>
        <input class="${style.input}" type="text" name="message" placeholder="Сообщение">
        <div class="${style.submit_button}">
            {{{submitButton}}}
        </div>
    </form>
`;
