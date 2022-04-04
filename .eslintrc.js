module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
  ],
  plugins: ['prettier', 'react', '@typescript-eslint'],
  parserOptions: {
    project: ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['node_modules/', 'dist/', '*.config.js', 'getInputFiles.js'],
  env: {
    jest: true,
    browser: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./src'],
      },
    },
  },
  globals: {
    window: 'readonly',
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': ['error', 'never'],
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    'react/no-danger': 'error',
    'react/static-property-placement': 'off',
    'react/destructuring-assignment': 'off',
    'react/require-default-props': 'off',
    'react/display-name': 'off',
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-variables',
          'static-methods',
          'instance-variables',
          'getters',
          'setters',
          'lifecycle',
          'render',
          'instance-methods',
          'everything-else',
        ],
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'import/no-cycle': 'off',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling'], 'index'],
        'newlines-between': 'always',
      },
    ],
    'import/extensions': [
      'error',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        'd.ts': 'never',
        tsx: 'never',
      },
    ],
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      {
        before: false,
        after: true,
        overrides: { arrow: { before: true, after: true } },
      },
    ],
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true }],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'enum',
        format: ['UPPER_CASE'],
      },
    ],
    'no-restricted-imports': ['error', '@material-ui/core', '@material-ui/icons'],
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    'no-dupe-class-members': 'off',
    'lines-between-class-members': 'off',
    'no-undef': 'off',
    'consistent-return': 'off',
    'default-case': 'off',
  },
};
