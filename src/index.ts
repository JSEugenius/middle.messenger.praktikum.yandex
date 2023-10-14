import { renderDOM } from 'utils/render-dom';
import { ErrorPage } from 'pages/errors/errors';
import { AuthPage } from 'pages/auth/auth';
import { ProfileChangePage } from 'pages/profile/profile-change/profile-change';
import { PersonalInfoPage } from 'pages/profile/personal-info/personal-info';

const ROUTES = {
  '/': AuthPage('sign-in'),
  '/sign-in': AuthPage('sign-in'),
  '/sign-up': AuthPage('sign-up'),
  // '/chat': Chat(),
  '/profile': PersonalInfoPage(),
  '/profile-change': ProfileChangePage('info'),
  '/password-change': ProfileChangePage('password'),
  '/404': ErrorPage(404),
  '/500': ErrorPage(500),
};

window.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname as keyof typeof ROUTES;
  renderDOM('#app', ROUTES[path]);
});
