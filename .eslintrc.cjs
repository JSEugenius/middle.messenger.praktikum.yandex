module.exports = {
    root: true,

    extends: [
        'airbnb-typescript/base'
    ],

    parser: '@typescript-eslint/parser',

    parserOptions: {
        project: './tsconfig.json',  //required for "type-aware linting"
    },

    rules: {
        'import/extensions': 'off'
    },

    plugins: [
        'eslint-plugin-import'
    ]
}
