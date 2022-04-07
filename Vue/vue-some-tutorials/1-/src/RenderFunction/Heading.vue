<script lang="ts">
import { h } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    level: { type: Number, default: 1 },
  },
  setup({ level }, { slots }) {
    const slot = slots ? slots.default?.() : [];

    const modifiedSlot = slot?.map(({ children }) => {
      return h(
        "div" as unknown as HTMLElement, //error if remove as type
        { style: "color:purple" },
        children as any
      );
    });
    return () => h(`h${level}`, modifiedSlot);
  },
});
</script>

<style scoped>
</style>