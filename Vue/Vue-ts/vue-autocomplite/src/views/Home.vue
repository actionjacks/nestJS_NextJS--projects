<template>
  <div class="home">
    <Autocomplite
      :items="[
        'Apple',
        'Banana',
        'Orange',
        'Mango',
        'Pear',
        'Peach',
        'Grape',
        'Tangerine',
        'Pineapple',
      ]"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Autocomplite from "@/components/Autocomplite.vue";

export default defineComponent({
  components: { Autocomplite },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.autocomplete {
  position: relative;
}

.autocomplete-results {
  padding: 0;
  margin: 0;
  border: 1px solid #eeeeee;
  height: 120px;
  min-height: 1em;
  max-height: 6em;
  overflow: auto;
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
}

.autocomplete-result:hover {
  background-color: #4aae9b;
  color: white;
}
</style>
