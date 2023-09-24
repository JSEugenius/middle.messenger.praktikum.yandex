import { PersonalInfo } from 'pages/profile/personal-info/personal-info.ts';
import { NotFound } from 'pages/errors/not-found/not-found';
import { ServerError } from 'pages/errors/server-error/server-error';
import { SignIn } from 'pages/sign-in/sign-in.ts';
import { SignUp } from 'pages/sign-up/sign-up.ts';
import { ProfileChange } from 'pages/profile/profile-change/profile-change.ts';
import { PasswordChange } from 'pages/profile/password-change/password-change.ts';

const ROUTES = {
  '/': SignIn(),
  '/sign-in': SignIn(),
  '/sign-up': SignUp(),
  '/profile': PersonalInfo(),
  '/profile-change': ProfileChange(),
  '/password-change': PasswordChange(),
  '/404': NotFound(),
  '/500': ServerError(),
};
window.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');

  if (root) {
    const path = window.location.pathname as keyof typeof ROUTES;
    root.innerHTML = ROUTES[path];
  }
});