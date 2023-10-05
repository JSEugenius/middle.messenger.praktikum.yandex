import { createElement } from 'utils/create-element';
import { centeredLayout } from 'layouts/centered/centered.tmpl';

export const Centered = (content: string) => createElement(centeredLayout, { content });
