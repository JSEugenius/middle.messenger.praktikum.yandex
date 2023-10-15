import style from './error.module.scss';

// language=hbs
export const errorTmpl = `
  <article class="${style.root}">
      <div class="${style.heading}">
          <h1 class="${style.title}">{{code}}</h1>
          <p class="${style.subtitle}">{{description}}</p>
      </div>
      {{{link}}}
  </article>
`;
