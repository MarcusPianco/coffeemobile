module.exports = {
  env: {
    es6: true,
    jasmine: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly'
  },
  parser: 'babel-eslint',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension':[
        'warn',{ extensions: ['jsx', '.js','ts', 'tsx']}
    ],
    'import/prefer-default-export': 'off',
    "no-use-before-define": 'off',
    "import/no-unresolved": "off",
    "react/jsx-props-no-spreading": "off"

},
"settings": {
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathSuffix: 'src'
      },
    },
}

};
