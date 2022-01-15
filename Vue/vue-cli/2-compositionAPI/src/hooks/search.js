import { watch, ref, computed } from 'vue';

export default function useSearch(items, searchProps) {
  const enteredSearchTerm = ref('');
  const activeSearchTerm = ref('');

  const availableItems = computed(() => {
    let filteredItems = [];
    if (activeSearchTerm.value) {
      filteredItems = items.value.filter((item) =>
        item[searchProps].includes(activeSearchTerm.value)
      );
    } else if (items.value) {
      filteredItems = items.value;
    }
    return filteredItems;
  });

  watch(enteredSearchTerm, (nevValue) => {
    setTimeout(() => {
      if (nevValue === enteredSearchTerm.value) {
        activeSearchTerm.value = nevValue;
      }
    }, 300);
  });

  function updateSearch(val) {
    enteredSearchTerm.value = val;
  }

  return { enteredSearchTerm, availableItems, updateSearch };
}
