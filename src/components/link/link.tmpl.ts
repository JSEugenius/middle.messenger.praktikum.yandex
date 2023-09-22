import style from './link.module.scss';

//language=hbs
export const tmpl = `
  <a class="${style.root}" href="{{to}}">{{text}}</a>
`;