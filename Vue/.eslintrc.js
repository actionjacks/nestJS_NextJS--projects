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
        'src/components/Nav.vue',
        'src/components/Search.vue',
        'src/components/dashboard/Tab.vue',
        'src/components/data_table/Cell.vue',
        'src/components/data_table/DataTable.vue',
        'src/components/data_table/Summary.vue',
        'src/components/data_table/SummaryCell.vue',
        'src/components/data_table/cells/Action.vue',
        'src/components/data_table/cells/Checkbox.vue',
        'src/components/data_table/cells/InputWithChange.vue',
        'src/components/data_table/cells/NumberInput.vue',
        'src/components/data_table/cells/ToggleInput.vue',
        'src/components/data_table/summary/Action.vue',
        'src/components/data_table/summary/Filter.vue',
        'src/components/data_table/summary/Print.vue',
        'src/components/data_table/summary/Text.vue',
        'src/components/data_table/summary/actions/DropdownButton.vue',
        'src/components/data_table/summary/actions/Option.vue',
        'src/components/data_table_3/BodyRow.vue',
        'src/components/data_table_3/Cell.vue',
        'src/components/data_table_3/DataTable.vue',
        'src/components/data_table_3/HeaderRow.vue',
        'src/components/data_table_3/cells/Checkbox.vue',
        'src/components/data_table_3/cells/NumberInput.vue',
        'src/components/documents/form/UpdatePosition.vue',
        'src/components/documents/form/ValuatePosition.vue',
        'src/components/errors/Alert.vue',
        'src/components/filter/Filter.vue',
        'src/components/filter/Group.vue',
        'src/components/filter/Input.vue',
        'src/components/filter/input/Date.vue',
        'src/components/filter/input/DateRange.vue',
        'src/components/filter/input/GroupDate.vue',
        'src/components/filter/input/Option.vue',
        'src/components/filter/input/SortDropdown.vue',
        'src/components/filter/input/Text.vue',
        'src/components/form/AddonInput.vue',
        'src/components/form/Autocomplete.vue',
        'src/components/form/BusinessHour.vue',
        'src/components/form/Checkbox.vue',
        'src/components/form/Checkbox2.vue',
        'src/components/form/CheckboxPicker.vue',
        'src/components/form/DatePicker.vue',
        'src/components/form/DateRangePicker.vue',
        'src/components/form/Filter.vue',
        'src/components/form/Input.vue',
        'src/components/form/TextInput.vue',
        'src/components/form/TextInputBack.vue',
        'src/components/form/TimePicker.vue',
        'src/components/form/Toggle.vue',
        'src/components/inputs/dropdown/AddOption.vue',
        'src/components/inputs/dropdown/Dropdown.vue',
        'src/components/inputs/dropdown/DropdownButton.vue',
        'src/components/inputs/dropdown/Option.vue',
        'src/components/inventory/Header.vue',
        'src/components/inventory/NoInventoryPanel.vue',
        'src/components/inventory/NoInventoryPanel.vue',
        'src/components/inventory/SearchBar.vue',
        'src/components/inventory/SummaryHeader.vue',
        'src/components/inventory/form/AddInventoryProduct.vue',
        'src/components/inventory/form/Commission.vue',
        'src/components/inventory/form/CreateInventory.vue',
        'src/components/inventory/form/CreateInventorySheet.vue',
        'src/components/inventory/form/CreateWarehouseInventory.vue',
        'src/components/inventory/form/InventoryForm.vue',
        'src/components/inventory/form/InventoryPartAssignment.vue',
        'src/components/inventory/form/InventoryPartCreate.vue',
        'src/components/inventory/form/WarehouseInventoryForm.vue',
        'src/components/menu/ScrollButton.vue',
        'src/components/mixins/dataLoader/Loader.vue',
        'src/components/modals/Modal.vue',
        'src/components/modals/TutorialModal.vue',
        'src/components/modals/form/Confirm.vue',
        'src/components/modals/form/Problem.vue',
        'src/components/modals/form/YesNo.vue',
        'src/components/modals/valuate/ValuateModal.vue',
        'src/components/modals/valuate/steps/FirstStep.vue',
        'src/components/paginator/PageButtons.vue',
        'src/components/paginator/PageSelect.vue',
        'src/components/paginator/Pager.vue',
        'src/components/paginator/Paginator.vue',
        'src/components/position/AddPosition.vue',
        'src/components/position/ProductSelect.vue',
        'src/components/price_cards/Action.vue',
        'src/components/price_cards/ProductSelect.vue',
        'src/components/price_cards/SearchBar.vue',
        'src/components/print/Print.vue',
        'src/components/products/form/AddProduct.vue',
        'src/components/products/form/RelatedCodeInput.vue',
        'src/components/products/form/ValuateProduct.vue',
        'src/components/promotion/categories/Category.vue',
        'src/components/promotion/categories/Promotion.vue',
        'src/components/promotion/categories/promotion_category/Actions.vue',
        'src/components/promotion/categories/promotion_category/AssignedList.vue',
        'src/components/promotion/categories/promotion_category/Histories.vue',
        'src/components/promotion/categories/promotion_category/ProductGroup.vue',
        'src/components/promotion/categories/promotion_category/Products.vue',
        'src/components/promotion/form/ValuateProduct.vue',
        'src/components/promotion/nav/NavTab.vue',
        'src/components/reports/modals/Date.vue',
        'src/components/reports/modals/Filters.vue',
        'src/components/reports/modals/Params.vue',
        'src/components/reports/modals/Params.vue',
        'src/components/social_media/SociaMediaInput.vue',
        'src/components/supply/document/CreateDocument.vue',
        'src/components/top_menu/ToggleButton.vue',
        'src/components/top_menu/TopMenu.vue',
        'src/components/top_menu/message_dropdown/Message.vue',
        'src/components/top_menu/store_dropdown/StoreElement.vue',
        'src/components/top_menu/store_dropdown/StoreHeader.vue',
        'src/components/warehouse/contractor/form/AddContractorForm.vue',
        'src/components/warehouse/document/CompensationPosition.vue',
        'src/components/warehouse/document/Nav.vue',
        'src/components/warehouse/inventory/form/AddInventoryCollection.vue',
        'src/version/NewVersion.vue',
        'src/views/products/List.vue'
      ],
      rules: {
        'vue/require-emit-validator': 'off'
      }
    },
    // FIXME single rule in multiple files
    {
      files: [
        'src/components/documents/Import.vue',
        'src/components/inputs/dropdown/AddOption.vue',
        'src/components/inputs/dropdown/Dropdown.vue',
        'src/components/inputs/dropdown/Option.vue',
        'src/components/inputs/dropdown/ValueDropdown.vue',
        'src/components/inventory/Actions.vue',
        'src/components/inventory/Header.vue',
        'src/components/inventory/NoInventoryPanel.vue',
        'src/components/inventory/SearchBar.vue',
        'src/components/inventory/SummaryHeader.vue',
        'src/components/menu/Menu.vue',
        'src/components/menu/Panel.vue',
        'src/components/menu/ScrollButton.vue',
        'src/components/mixins/Svg.vue',
        'src/components/mixins/dataLoader/Loader.vue',
        'src/components/reports/modals/Date.vue',
        'src/components/reports/modals/Params.vue',
        'src/components/slider/SlideButtons.vue',
        'src/components/supply/document/CreateDocument.vue',
        'src/components/warehouse/contractor/form/AddContractorForm.vue',
        'src/components/warehouse/document/CreateDocument.vue',
        'src/components/warehouse/document/Import.vue',
        'src/components/warehouse/document/Nav.vue',
        'src/components/warehouse/document/NavTab.vue',
        'src/components/warehouse/inventory/form/AddInventoryCollection.vue'
      ],
      rules: {
        'vue/require-expose': 'off'
      }
    },
    // FIXME single rule in multiple files
    {
      files: [
        'src/App.vue',
        'src/components/data_table/summary/DataWrapper.vue',
        'src/components/data_table/summary/actions/DropdownButton.vue',
        'src/components/documents/Import.vue',
        'src/components/form/AddonInput.vue',
        'src/components/inputs/dropdown/Picker.vue',
        'src/components/inventory/Header.vue',
        'src/components/inventory/SummaryHeader.vue',
        'src/components/price_cards/SearchBar.vue',
        'src/components/promotion/categories/Category.vue',
        'src/components/promotion/nav/PromotionNav.vue',
        'src/components/warehouse/document/Import.vue',
        'src/views/contractors/Contractors.vue',
        'src/views/inventories/Collection.vue',
        'src/views/inventories/Collections.vue',
        'src/views/inventories/Update.vue',
        'src/views/inventories/warehouse/Collection.vue',
        'src/views/inventories/warehouse/CollectionUpdate.vue',
        'src/views/inventories/warehouse/Collections.vue',
        'src/views/inventories/warehouse/Update.vue',
        'src/views/panel/BankAccountNumber.vue',
        'src/views/panel/BusinessHours.vue',
        'src/views/panel/Notification.vue',
        'src/views/panel/PhoneNumber.vue',
        'src/views/panel/SocialMedia.vue',
        'src/views/price_cards/Index.vue',
        'src/views/products/Index.vue',
        'src/views/products/Valuate.vue',
        'src/views/reports/Index.vue',
        'src/views/reports_list/List.vue',
        'src/views/supplies/List.vue',
        'src/views/supplies/Update.vue',
        'src/views/warehouse/Compensation.vue',
        'src/views/warehouse/List.vue',
        'src/views/warehouse/Update.vue'
      ],
      rules: {
        'vue/no-reserved-component-names': 'off'
      }
    },
    // FIXME single rule in multiple files
    {
      files: [
        'src/components/inputs/dropdown/AddOption.vue',
        'src/components/dashboard/Tab.vue',
        'src/components/data_table/Cell.vue',
        'src/components/data_table/Summary.vue',
        'src/components/data_table/SummaryCell.vue',
        'src/components/data_table/summary/Print.vue',
        'src/components/inputs/dropdown/AddOption',
        'src/components/inventory/SearchBar.vue',
        'src/components/print/Print.vue'
      ],
      rules: {
        'vue/custom-event-name-casing': 'off' // FIXME
      }
    },
    // FIXME single rule in multiple files
    {
      files: [
        // javascript components
        'src/components/top_menu/store_dropdown/StoreDropdown.vue',
        'src/components/form/Checkbox.vue',
        'src/components/form/Filter.vue'
      ],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off' // FIXME
      }
    },
    // FIXME single rule in multiple files
    {
      files: [
        'src/components/data_table/classes/DataTable.ts',
        'src/components/form/NumberInput.vue'
      ],
      rules: {
        complexity: 'off' // FIXME
      }
    },
    // FIXME single rule in multiple files
    {
      files: [
        'src/classes/promotion/index.ts',
        'src/components/data_table/classes/DataTable.ts',
        'src/components/menu/MenuItem.ts'
      ],
      rules: {
        'no-use-before-define': 'off' // FIXME
      }
    }
  ]
}
