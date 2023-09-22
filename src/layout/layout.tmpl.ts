import style from './layout.module.scss';

//language=hbs
export const tmpl = `
  <main class="${style.root}">
      {{{content}}}
  </main>
`;