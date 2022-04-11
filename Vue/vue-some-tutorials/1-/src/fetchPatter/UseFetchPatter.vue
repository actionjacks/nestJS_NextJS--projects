<template>
  <FetchPater :url="url">
    <template v-slot="{ res: response, loading }">
      <div v-if="loading">LOADING</div>

      <div v-if="response && response[0]">
        <img :src="response[0].url" alt="" />
      </div> </template
  ></FetchPater>
</template>

  </FetchPater>
</template>

<script lang="ts">
import FetchPater from "./index.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { FetchPater },
  setup() {
    const url = "https://api.thecatapi.com/v1/images/search";
    return { url };
  },
});
</script>

<style scoped>
</style>