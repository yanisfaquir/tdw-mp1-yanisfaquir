module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '^@/components/(.*)$': '<rootDir>/components/$1',
    },
    transform: {

      "^.+\\.(t|j)sx?$": [

          "@swc/jest",

          {

              "jsc": {

                  "parser": {

                      "syntax": "ecmascript",

                      "jsx": true,

                      "decorators": false,

                      "dynamicImport": false

                  }

              }

          },

      ],

  },
  };
  