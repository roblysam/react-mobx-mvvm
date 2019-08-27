module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "react-app",
        //"plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint"
        //"plugin:prettier/recommended"
    ],
    settings: {
        react: {
            version: "detect"
        }
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            legacyDecorators: true
        },
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: "module" // Allows for the use of imports
    },
    rules: {
        // TODO: fix these issues and remove these rules
        "@typescript-eslint/no-array-constructor": 0,
        "@typescript-eslint/no-use-before-define": 0,
        "@typescript-eslint/no-var-requires": 0,

        // consider fixing these
        "@typescript-eslint/camelcase": 0,

        // needed for JS
        "@typescript-eslint/explicit-function-return-type": 0,

        // our coding standards
        "@typescript-eslint/interface-name-prefix": 0,
        "@typescript-eslint/no-empty-interface": 0,

        // loosen the thumb screws
        "@typescript-eslint/explicit-member-accessibility": 0,
        "@typescript-eslint/no-object-literal-type-assertion": 0,
        "@typescript-eslint/prefer-interface": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "react-hooks/exhaustive-deps": 0
    }
};

/*module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:@typescript-eslint/recommended",
        "react-app",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    plugins: ["@typescript-eslint", "react"],
    parserOptions: {
        / *
         * /
        ecmaFeatures: {
            legacyDecorators: true
        }
        / *,
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: "module" // Allows for the use of imports
        * /
    },
    rules: {
        "@typescript-eslint/explicit-function-return-type": 0
    }
};
*/
