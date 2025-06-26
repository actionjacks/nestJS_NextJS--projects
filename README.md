# Ubuntu Invidia Acer
```bash
sudo nano /etc/default/grub
```
```
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash pcie_aspm=force acpi_backlight=native modprobe.blacklist=amdgpu"
```

# https://github.com/SortableJS/Sortable
!!

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
# select text component by search
```
<template>
  <span v-if="search && startText > -1">
    <span>{{ title.substring(0, startText) }}</span>
    <span class="text-featuredSearchText">
      {{ title.substring(startText, endText) }}
    </span>
    <span>{{ title.substring(endText) }}</span>
  </span>
  <span v-else>
    {{ title }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  /**
   * Element's title (text).
   */
  title?: string
  /**
   * Searched text - mark in element.
   */
  searchText?: string
}>(), {
  title: '',
  searchText: ''
})

const search = computed<string>(() => props.searchText.toLowerCase())
const searchableTitle = computed<string>(() => props.title.toLowerCase())

const startText = computed<number>(() => searchableTitle.value.indexOf(search.value))
const endText = computed<number>(() => startText.value + search.value.length)
</script>
```
