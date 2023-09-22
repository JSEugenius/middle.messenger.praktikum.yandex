import { Main } from './pages/main/main';
import { NotFound } from 'pages/not-found/not-found';
import { ServerError } from 'pages/server-error/server-error';
import { SignIn } from 'pages/sign-in/sign-in.ts';

const ROUTES = {
  '/': Main(),
  '/404': NotFound(),
  '/500': ServerError(),
  '/sign-in': SignIn(),
};
window.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');

  if (root) {
    const path = window.location.pathname as keyof typeof ROUTES;
    root.innerHTML = ROUTES[path];
  }
});