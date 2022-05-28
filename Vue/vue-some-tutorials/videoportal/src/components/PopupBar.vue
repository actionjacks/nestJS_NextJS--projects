<template>
  <div v-if="showPopup" class="wrapper">
    <div v-if="showPopup.show" class="popup-container" :class="[showPopup.position]">
      <div class="info-box">
        <span>{{ showPopup.title }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// refactor POPUP
import { defineComponent, watch } from 'vue'
import { useStore } from "vuex";
import { key } from "@/store/index";
import { mapGetters } from "@/store/map-state";
import { ShowPopup } from '@/store/stateTypes'
import { computed } from '@vue/reactivity';

export default defineComponent({
  setup() {
    const store = useStore(key)
    const { getPopup } = mapGetters()
    const showPopup = computed<ShowPopup>(() => getPopup.value)

    let timeoutId = 0

    watch(showPopup, () => {
      if (timeoutId > 0) {
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(() => {
        return store.dispatch('startPopup', {
          title: '',
          position: 'bottom',
          show: false
        })
      }, 3000)
    })

    return {
      showPopup
    }
  }
})
</script>

<style lang="scss" scoped>
.popup-container {
  position: fixed;
  background-color: rgb(27, 27, 26);
  z-index: 99;

  .info-box {
    font-weight: 700;
    font-size: 16px;
    color: rgb(243, 241, 236);
  }
}

.bottom {
  left: 43.33%;
  bottom: 10px;
}

.up {
  left: 43.33%;
  top: 10px;
}

.left {
  top: 50%;
  left: 10px
}

.right {
  top: 50%;
  right: 10px
}
</style>