import style from './sign-in.module.scss';

//language=hbs
export const tmpl = `
    <article class="${style.root}">
        <h1 class="${style.title}">{{title}}</h1>
        <form class="${style.form}" autocomplete="off">
            <div class="${style.input_container}">
                {{{inputLogin}}}
                {{{inputPassword}}}
            </div>
            <div class="${style.button_container}">
                {{{linkSignIn}}}
                {{{linkSignUp}}}
            </div>
        </form>
    </article>
`;