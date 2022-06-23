module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020
  },
  plugins: [
    '@typescript-eslint'
  ],
  reportUnusedDisableDirectives: true,
  rules: {
    // Configured
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/space-before-function-paren': 'error',
    'array-callback-return': 'error',
    camelcase: 'error',
    complexity: 'warn',
    'no-await-in-loop': 'error',
    'no-constructor-return': 'error',
    'no-duplicate-imports': 'error',
    'no-multiple-empty-lines': 'warn',
    'no-self-compare': 'error',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-useless-constructor': 'off',
    'prefer-rest-params': 'error',
    'prefer-template': 'error',
    'space-before-function-paren': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 1,
      multiline: {
        max: 1,
        allowFirstLine: true
      }
    }],
    'vue/block-tag-newline': 'error',
    'vue/component-name-in-template-casing': 'error',
    'vue/custom-event-name-casing': 'error',
    'vue/html-button-has-type': 'error',
    'vue/html-comment-content-newline': 'error',
    'vue/html-comment-content-spacing': 'warn',
    'vue/html-comment-indent': 'warn',
    'vue/match-component-file-name': 'error',
    'vue/next-tick-style': 'error',
    // 'vue/no-bare-strings-in-template': 'error', To be enabled in future
    'vue/no-boolean-default': 'error',
    'vue/no-deprecated-v-is': 'error',
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-export-in-script-setup': 'error',
    'vue/no-invalid-model-keys': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-potential-component-option-typo': 'error',
    'vue/no-reserved-component-names': 'error',
    'vue/no-restricted-block': 'error',
    'vue/no-restricted-call-after-await': 'error',
    'vue/no-restricted-component-options': 'error',
    'vue/no-restricted-custom-event': 'error',
    'vue/no-restricted-props': 'error',
    'vue/no-restricted-static-attribute': 'error',
    'vue/no-restricted-v-bind': 'error',
    'vue/no-static-inline-styles': 'warn',
    'vue/no-template-target-blank': 'error',
    'vue/no-this-in-before-route-enter': 'error',
    'vue/no-unregistered-components': ['error', {
      ignorePatterns: [
        // vue global components
        'RouterLink',
        'RouterView'
      ]
    }],
    'vue/no-unsupported-features': 'error',
    'vue/no-unused-components': 'warn',
    'vue/no-unused-properties': 'warn',
    'vue/no-unused-refs': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/require-direct-export': 'error',
    'vue/require-emit-validator': 'error',
    'vue/require-expose': 'error',
    'vue/script-indent': ['error', 2, {
      switchCase: 1
    }],
    'vue/static-class-names-order': 'off',
    'vue/v-for-delimiter-style': 'error',
    'vue/v-on-event-hyphenation': 'error',
    'vue/v-on-function-call': 'error',
    'vue/valid-define-emits': 'error',
    'vue/valid-define-props': 'error',
    'vue/valid-next-tick': 'error',
    'vue/array-bracket-newline': 'error',
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/camelcase': 'error',
    'vue/comma-dangle': 'warn',
    'vue/comma-spacing': 'error',
    'vue/comma-style': 'error',
    'vue/dot-location': 'error',
    'vue/dot-notation': 'error',
    'vue/eqeqeq': 'error',
    'vue/func-call-spacing': 'error',
    'vue/key-spacing': 'error',
    'vue/keyword-spacing': 'error',
    'vue/max-len': ['warn', {
      code: 135,
      ignoreTrailingComments: true
    }],
    'vue/no-constant-condition': 'error',
    'vue/no-empty-pattern': 'error',
    'vue/no-extra-parens': 'error',
    'vue/no-irregular-whitespace': 'error',
    'vue/no-restricted-syntax': 'error',
    'vue/no-sparse-arrays': 'error',
    'vue/no-useless-concat': 'error',
    'vue/object-curly-newline': 'error',
    'vue/object-curly-spacing': 'error',
    'vue/object-property-newline': 'error',
    'vue/operator-linebreak': 'error',
    'vue/prefer-template': 'error',
    'vue/space-in-parens': 'error',
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': 'error',
    'vue/template-curly-spacing': 'error',
    // FIXME fix or move to "configured"
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false
        }
      }
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: true,
        ignoreProperties: true
      }
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never'
      }
    ],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'never'
      }
    ],
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    'no-use-before-define': ['warn', {
      functions: false,
      classes: true,
      variables: true
    }],
    '@typescript-eslint/no-this-alias': 'error'
  },
  overrides: [
    // Make it work with vue/script-indent
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    },
    // Disable this rules in de-facto svg file
    {
      files: [
        'src/components/svg/*.vue'
      ],
      rules: {
        'vue/attributes-order': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/max-len': 'off'
      }
    },
    // Mixins declaration should not have expose element
    {
      files: ['*.ts'],
      rules: {
        'vue/require-expose': 'off'
      }
    },
    // Disable rules that can not be enforced on JavaScript files
    {
      files: [
        'src/**/*.js'
      ],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off'
      }
    },
    // Tests' configuration
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    },
    // FIXME single rule in multiple files
    {
      files: [
      ],
      rules: {
        'vue/require-emit-validator': 'off'
      }
    },
    // FIXME single rule in multiple files
    {
      files: [
      ],
      rules: {
        'vue/require-expose': 'off'
      }
    },
    // FIXME single rule in multiple files
    {
      files: [
      ],
      rules: {
        'vue/no-reserved-component-names': 'off'
      }
    },
    // FIXME single rule in multiple files
    {
      files: [
      ],
      rules: {
        'vue/custom-event-name-casing': 'off' // FIXME
      }
    },
    // FIXME single rule in multiple files
    {
      files: [
        // javascript components
      ],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off' // FIXME
      }
    },
    // FIXME single rule in multiple files
    {
      files: [
      ],
      rules: {
        complexity: 'off' // FIXME
      }
    },
    // FIXME single rule in multiple files
    {
      files: [
      ],
      rules: {
        'no-use-before-define': 'off' // FIXME
      }
    }
  ]
}
