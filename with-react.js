module.exports = {

  extends: 'commercetools',

  plugins: ['react'],

  ecmaFeatures: {
    jsx: true
  },

  env: {
    browser: true
  },

  rules: {
    'react/display-name': 0,
    'react/jsx-boolean-value': [ 2, 'always' ],
    'react/jsx-key': 2,
    'react/jsx-no-bind': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'raact/no-is-mounted': 2,
    'react/no-multi-comp': 0,
    'react/no-unknown-property': 2,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/self-closing-comp': 2,
    'react/wrap-multilines': 2
  }

};
