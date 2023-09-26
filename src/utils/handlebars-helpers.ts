import Handlebars from 'handlebars';

export const compileTemplate = (tmpl: string) => {
  return Handlebars.compile(tmpl);
};

export const createElement = (tmpl: string, context?: any): string => {
  return compileTemplate(tmpl)(context ?? {});
};