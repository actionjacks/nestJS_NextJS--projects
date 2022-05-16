import { computed } from "vue"
import { useStore } from "vuex"
import { key } from "@/store/index";

const mapGetters = () => {
  const store = useStore(key)
  return Object.fromEntries(
    Object.keys(store.getters).map(
      getter => [getter, computed(() => store.getters[getter])]
    )
  )
}
export { mapGetters }