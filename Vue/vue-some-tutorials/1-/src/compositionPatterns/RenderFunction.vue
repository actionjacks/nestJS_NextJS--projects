
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: { info: { type: String, default: "" } },
  setup(props) {
    return () => props.info;
  },
});
</script>
