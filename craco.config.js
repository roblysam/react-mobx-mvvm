/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const { ESLINT_MODES } = require("@craco/craco");

module.exports = {
  babel: {
    plugins: [
      ["@babel/plugin-proposal-decorators", {
        legacy: true
      }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
      ["@babel/plugin-transform-for-of", { loose: true }]
    ],
  },
  eslint: {
      mode: ESLINT_MODES.file
  },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/")
    }
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^@[/](.+)": "<rootDir>/src/$1"
      },
      modulePathIgnorePatterns: ["<rootDir>/public/"],
      automock: false
    }
  }
};
