<template>
  <div v-if="showPopup.length > 0" class="wrapper">
    <TransitionGroup name="list" tag="ul">
      <div v-for="(popup, index) in showPopup" class="popup-container" :key="index" :class="[popup.position]">
        <div class="info-box">
          <span>{{ popup.title }}</span>
        </div>
      </div>
    </TransitionGroup>

  </div>
</template>

<script lang="ts">
// refactor POPUP
import { defineComponent, computed, onUpdated } from 'vue'
import { useStore } from "vuex";
import { key } from "@/store/index";
import { ShowPopup } from '@/store/stateTypes'

export default defineComponent({
  setup() {
    const store = useStore(key)
    const showPopup = computed<any>(() => store.getters['popup/getPopup'])
    let timeoutId = 0

    onUpdated(() => {
      showPopup.value.forEach((pop: ShowPopup) => {
        if (timeoutId > 0) {
          clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
          showPopup.value.pop()
        }, 800)
      })
    })

    return {
      showPopup
    }
  }
})
</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  left: 43.33%;
  bottom: 0;

  .popup-container {
    .info-box {
      background-color: rgb(27, 27, 26);
      z-index: 99;
      font-weight: 700;
      font-size: 16px;
      color: rgb(243, 241, 236);
    }
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

//form vue doc *-todo
.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>