import Handlebars from 'handlebars';

const compileTemplate = (tmpl: string) => Handlebars.compile(tmpl);

// eslint-disable-next-line max-len
export const createElement = (tmpl: string, context?: any): string => compileTemplate(tmpl)(context ?? {});
