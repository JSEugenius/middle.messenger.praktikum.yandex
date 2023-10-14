import Handlebars from 'handlebars';

Handlebars.registerHelper('lookupOrDefault', (object, propertyName, defaultValue, options) => {
  const result = options.lookupProperty(object, propertyName);
  if (result === undefined) {
    return defaultValue;
  }
  return result;
});

Handlebars.registerHelper('setBooleanAttribute', (object, propertyName, options) => {
  const result = options.lookupProperty(object, propertyName);
  if (!result) {
    return '';
  }

  return propertyName;
});

const compileTemplate = (tmpl: string) => Handlebars.compile(tmpl);

// eslint-disable-next-line max-len
export const createElement = (tmpl: string, context?: any): string => compileTemplate(tmpl)(context ?? {});
