// language=hbs
export const inputTmpl = `
    <input class="{{inputClassName}}" id="{{name}}" name="{{name}}" type="{{lookupOrDefault this 'type' 'text'}}" placeholder=" " value="{{value}}" />
`;
