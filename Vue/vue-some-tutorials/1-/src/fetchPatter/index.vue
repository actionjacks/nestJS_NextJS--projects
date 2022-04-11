<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: { url: { type: String } },

  setup(props, ctx: any) {
    let res = ref<unknown>("");
    let loading = ref<boolean>(true);

    fetch(props.url ?? "")
      .then((response) => response.json())
      .then((response) => {
        res.value = response;
        loading.value = false;
      });

    return () => {
      ctx.slots.default({ res: res.value, loading: loading.value });
    };
  },
});
</script>

<style scoped>
</style>