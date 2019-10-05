module.exports = {
  "plugins": [ "react","eslint-plugin-react" ],
  "ecmaFeatures": {
        "jsx": true
    },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "env": {
    "browser": true,
    "node": true,
    "es6" : true
  },
  "rules": {
        'no-console': 'off',
        "jsx-uses-vars": 1,
        "react-in-jsx-scope": 1
    },
  "parser": "babel-eslint"
};

