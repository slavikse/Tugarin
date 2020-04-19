module.exports = {
  root: true,

  env: {
    node: true,
    browser: true,
    es6: true,
  },

  extends: 'airbnb-base',

  rules: {
    'object-curly-newline': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'max-len': [1, 120],
  },

  globals: {
    state: 'writable',
  },
};
