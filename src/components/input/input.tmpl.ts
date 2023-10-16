// language=hbs
export const inputTmpl = `
    <input 
        class="{{className}}" 
        id="{{name}}" 
        name="{{name}}" 
        type="{{lookupOrDefault this 'type' 'text'}}" 
        placeholder="{{lookupOrDefault this 'placeholder' ' '}}" 
        value="{{value}}" 
    />
`;
