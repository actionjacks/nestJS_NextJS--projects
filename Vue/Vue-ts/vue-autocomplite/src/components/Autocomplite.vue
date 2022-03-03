<template>
  <div class="autocomplete">
    <input
      type="text"
      v-model="search"
      @input="handleInput"
      @keydown.down="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.enter="onEnter"
    />

    <ul class="autocomplete-results" v-show="isOpen">
      <li v-if="isLoading" class="loading">Loading results...</li>

      <li
        v-else
        v-for="(result,i)in results"
        class="autocomplete-result"
        :class="{ 'is-active': i === arrowCounter }"
        :key="i"
        @click="setResult(result)"
      >
        {{ result }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue";

export default defineComponent({
  props: {
    items: { type: Array as PropType<string[]>, required: false, default: [] },
    isAsync: { type: Boolean, required: false, default: false },
  },
  emits: ["input"],

  setup(props, { emit }) {
    const search = ref<string>("");
    const isOpen = ref<boolean>(false);
    const isLoading = ref<boolean>(false);
    const arrowCounter = ref<number>(-1);

    const itemsFromProps = ref<Array<string>>(props.items);
    const results = ref<Array<string>>([]);

    function handleInput() {
      emit("input", search.value);

      if (props.isAsync) {
        isLoading.value = true;
        return;
      }

      filterResults();
      isOpen.value = true;
    }

    function filterResults() {
      results.value = itemsFromProps.value.filter((item) =>
        item.toLowerCase().indexOf(search.value.toLowerCase())
      );
    }

    function setResult(result: string) {
      if (!result) {
        return;
      }
      search.value = result;
      isOpen.value = false;
    }

    function onArrowDown() {
      if (arrowCounter.value < results.value.length) {
        arrowCounter.value = arrowCounter.value + 1;
      }
    }
    function onArrowUp() {
      if (arrowCounter.value > 0) {
        arrowCounter.value = arrowCounter.value - 1;
      }
    }
    function onEnter() {
      search.value = results.value[arrowCounter.value];
      arrowCounter.value = -1;
      isOpen.value = false;
    }

    watch(itemsFromProps, (currentValue, oldValue) => {
      if (props.isAsync) {
        results.value = currentValue;
        isOpen.value = true;
        isLoading.value = false;
      }
    });

    return {
      search,
      results,
      isOpen,
      onArrowDown,
      onArrowUp,
      onEnter,
      handleInput,
      setResult,
      arrowCounter,
      isLoading,
    };
  },

  methods: {
    handleClickOutside(event: Event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener("click", this.handleClickOutside);
  },
});
</script>

<style scoped></style>
