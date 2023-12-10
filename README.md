# nestJS_NextJS--projects

```
https://bun.sh/
```
#
```
https://www.devgpt.com/
```

# vue custom directive 
```
/**
 * Define indeterminate directive.
 * @param {HTMLInputElement} element Element to bind to.
 * @param {object} binding Binding object.
 * @param {unknown} binding.value Value to check.
 * @returns {void}
 */
function vIndeterminate (element, binding) {
  element.indeterminate = Boolean(binding.value)
}

      <input v-indeterminate="isIntermediate"
             :checked="isAllRowsChecked"
             class="default-checkbox"
             type="checkbox"
             @input="checkAllVisible">

```
