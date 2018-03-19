module.exports = {
  extends: 'eslint:recommended',
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    // 改写recommended的规则
    'no-console': 0,
    'no-debugger': 0,
    // \改写recommended的规则

    /* possible errors */
    'for-direction': 2,
    'getter-return': 2,
    'no-await-in-loop': 2,
    'no-template-curly-in-string': 2,
    /* \possible errors */

    /* best practices */
    'accessor-pairs': 2,
    'array-callback-return': 2,
    'class-methods-use-this': 2,
    'consistent-return': 2,
    'default-case': 2,
    'dot-notation': 2,
    eqeqeq: 2,
    'guard-for-in': 2,
    'no-alert': 2,
    'no-caller': 2,
    'no-div-regex': 2,
    'no-else-return': 2,
    'no-empty-function': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-label': 2,
    'no-implicit-coercion': 2,
    'no-implicit-globals': 2,
    'no-implied-eval': 2,
    'no-invalid-this': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-magic-numbers': 2,
    'no-multi-str': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 2,
    'no-proto': 2,
    'no-restricted-properties': 2,
    'no-return-assign': 2,
    'no-return-await': 2,
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-useless-return': 2,
    'no-void': 2,
    'no-warning-comments': 2,
    'no-with': 2,
    'prefer-promise-reject-errors': 2,
    radix: [2, 'as-needed'],
    'require-await': 2,
    'wrap-iife': [2, 'inside'],
    /* \best practices */

    /* variables */
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-undef-init': 2,
    'no-undefined': 2,
    /* \variables */

    /* Node && CommonJS */
    'callback-return': 2,
    'handle-callback-err': 2,
    'no-buffer-constructor': 2,
    'no-path-concat': 2,
    'no-process-exit': 2,
    'no-sync': [2, { allowAtRootLevel: true }],
    /* \Node && CommonJS */

    /* ES6 */
    'arrow-body-style': 2,
    'no-duplicate-imports': [2, { includeExports: true }],
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-var': 2,
    'object-shorthand': 2,
    'prefer-arrow-callback': 2,
    'prefer-const': 2,
    'prefer-destructuring': 2,
    'prefer-numeric-literals': 2,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'symbol-description': 2
    /* \ES6 */
  }
};
