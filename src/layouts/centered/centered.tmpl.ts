import style from './centered.module.scss';

//language=hbs
export const centeredLayout = `
  <main class="${style.root}">
      {{{content}}}
  </main>
`;