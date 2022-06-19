<template>
  <nav class="menu-wrapper">
    <div v-if="showBurger" class="mobile-wrapper">
      <LeftBooble :menu-items="itemsToRender" :activeClass="activeClass" @menuOnClick='menuOnClick' />
    </div>

    <div v-else class="menu" :class="{ show }">
      <ul>
        <li v-for="(item, index) in itemsToRender" :key="index">
          <a :href="item.url">{{ item.name }}</a>
        </li>
      </ul>
    </div>

    <div class="menu-bg" :class="{ changeBg: activeClass }" id="menu-bg"></div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, PropType, ref } from "vue"
import LeftBooble from './LeftBooble.vue'

export interface MenuItems {
  url: string
  name: string
}

export default defineComponent({
  components: { LeftBooble },
  props: {
    menuItems: {
      type: Array as PropType<MenuItems[]>, required: false, default: () =>
        [{ url: '#', name: 'item-1' },
        { url: '#', name: 'item-2' },
        { url: '#', name: 'item-3' }]
    },
    showBurgerBreakPoint: {
      type: Number, required: false, default: 800
    },
    showDesktopBarBreakpoint: {
      type: Number, required: false, default: 180
    }
  },
  setup(props) {
    const itemsToRender = ref<MenuItems[]>(props.menuItems)

    const show = ref<boolean>(false)
    const showBurger = ref<boolean>(false)
    const activeClass = ref<boolean>(false)

    function handleScroll() {
      if (window.scrollY > props.showDesktopBarBreakpoint) {
        show.value = true
        return
      }
      show.value = false

    }
    function handleResize() {
      if (window.innerWidth >= props.showBurgerBreakPoint) {
        show.value = true
        showBurger.value = false
        return
      }
      showBurger.value = true
    }
    function menuOnClick() {
      activeClass.value = !activeClass.value
    }
    onMounted(() => {
      if (window.innerWidth >= props.showDesktopBarBreakpoint) {
        showBurger.value = true
      } else { showBurger.value = false }
      window.addEventListener("scroll", handleScroll)
      window.addEventListener("resize", handleResize)
    })
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize);
    })
    return {
      itemsToRender,
      menuOnClick,
      activeClass,
      showBurger,
      show
    };
  },
});
</script>
<style lang="scss" src="./header.scss" scoped>
</style>