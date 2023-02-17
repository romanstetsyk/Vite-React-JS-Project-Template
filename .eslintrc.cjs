module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    // fixes 'React' must be in scope when using JSX
    'react/react-in-jsx-scope': 0,
  },
  // fixes 'vite' should be listed in the project's dependencies, not devDependencies
  ignorePatterns: ['vite.config.js'],
};
