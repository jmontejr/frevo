module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    camelcase: [
      'error',
      {
        ignoreDestructuring: true,
        ignoreImports: false
      }
    ],
    'brace-style': 'error',
    'object-curly-spacing': ['error', 'always'],
    'comma-spacing': ['error', { before: false, after: true }],
    'object-shorthand': 'error',
    'dot-notation': 'error',
    'eol-last': ['error', 'always'],
    eqeqeq: 'error',
    'lines-between-class-members': ['error', 'always'],
    'template-curly-spacing': ['error', 'always'],
    'block-spacing': ['error', 'always'],
    'arrow-spacing': 'error',
    'key-spacing': ['error', { beforeColon: false }],
    'no-delete-var': 'error',
    'no-new-object': 'error',
    'no-unused-expressions': 'error',
    'no-var': 'error',
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: true,
        ignoreComments: true
      },
    ],
    'no-const-assign': 'error',
    'no-multi-assign': 'error',
    'no-magic-numbers': [
      'error',
      {
        ignore: [],
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true
      }
    ],
    'no-template-curly-in-string': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single'],
    'no-extra-semi': 'error',
    semi: ['error', 'always', { omitLastInOneLineBlock: true }],
    'space-before-function-paren': ['error', 'never'],
    'space-before-blocks': 'error',
    'max-lines-per-function': ['error', { max: 30 }],
    'max-params': ['error', { max: 3 }],
    'max-depth': ['error', { max: 4 }],
    'max-len': [
      'error',
      {
        code: 80,
        ignoreComments: true,
        ignoreUrls: true,
        ignorePattern: '^\\s*var\\s.+=\\s*require\\s*\\(',
      },
    ],
  },
};
