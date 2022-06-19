<template>
  <div id="menu">
    <div id="menu-bar" :class="{ change: activeClass }" @click="$emit('menuOnClick')">
      <div id="bar1" class="bar"></div>
      <div id="bar2" class="bar"></div>
      <div id="bar3" class="bar"></div>
    </div>
    <nav class="nav" :class="{ change: activeClass }" id="nav">
      <ul>
        <li v-for="(item, index) in menuItems" :key="index">
          <a :href="item.url">{{ item.name }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { MenuItems } from './DynamicHeder.vue'

export default defineComponent({
  emits: {
    "menuOnClick": () => true
  },
  props: {
    menuItems: {
      type: Array as PropType<MenuItems[]>, required: true
    },
    activeClass: {
      type: Boolean, required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.menu-wrapper {
  z-index: 98;
  transition: all 0.4s ease-in-out 0s;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

#menu {
  z-index: 99;
}

#menu-bar {
  width: 35px;
  height: 35px;
  margin: 30px 0 20px 20px;
  cursor: pointer;
}

.bar {
  height: 5px;
  width: 100%;
  background-color: black;
  display: block;
  border-radius: 5px;
  transition: all 0.4s ease-in-out 0s;
}

#bar1 {
  transform: translateY(-4px);
}

#bar3 {
  transform: translateY(4px);
}

.nav {
  transition: 0.3s ease;
  display: none;
}

.nav ul {
  display: flex;
  flex-direction: column;
}

.nav li {
  list-style: none;
}

.nav li a {
  font-size: 16px;
  padding: 15px;
  width: auto;
  display: block;
  text-transform: none;
  text-decoration: none;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  font-weight: 300;
  outline: none;
  color: white;
}

.nav li a:hover {
  font-weight: bold;
}

.menu-bg,
#menu {
  top: 0;
  left: 0;
  position: absolute;
}

.menu-bg {
  z-index: 1;
  width: 0;
  height: 0;
  margin: 30px 0 20px 20px;
  background-color: black;
  border-radius: 50%;
  transition: all 0.4s ease-in-out 0s;
}

.change {
  display: block;
}

.change .bar {
  background-color: white;
}

.change #bar1 {
  transform: translateY(4px) rotateZ(-45deg);
}

.change #bar2 {
  opacity: 0;
}

.change #bar3 {
  transform: translateY(-6px) rotateZ(45deg);
}

.changeBg {
  width: 520px;
  height: 460px;
  transform: translate(-60%, -30%);
}

.menu {
  height: 4.5em;

  ul {
    display: flex;
    justify-content: flex-end;
    margin-right: 40px;

    li {
      background-color: black;
      -webkit-box-shadow: 0px 0px 3px 0px rgba(66, 68, 90, 0.411);
      -moz-box-shadow: 0px 0px 3px 0px rgba(66, 68, 90, 0.397);
      box-shadow: 0px 0px 3px 0px rgba(66, 68, 90, 0.356);
      border-radius: 5px;

      a {
        font-size: 20px;
        line-height: 50px;
        height: 50px;
        padding: 0 30px 0 30px;
        width: auto;
        display: block;
        text-transform: none;
        text-decoration: none;
        text-align: center;
        text-decoration: none;
        background: rgba(0, 0, 0, 0);
        border: 0;
        border-radius: 0;
        font-family: inherit;
        font-weight: 300;
        outline: none;
        transition: all 0.2s ease-in-out 0s;
      }

      a:hover {
        background: rgba(0, 0, 0, 0);
        font-weight: 300;
        text-decoration: none;
      }
    }
  }
}

.menu.show {
  width: 100%;
  box-shadow: 0px 0px 3px 0px rgb(66 68 90 / 36%);
  background-color: black;

  .e-mail {
    cursor: pointer;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 30%);
    margin-top: 5px;
    border-radius: 5px;

    p {
      font-size: 20px;
      line-height: 50px;
      text-transform: uppercase;
      height: 50px;
      padding: 0 30px 0 30px;
      width: auto;
      display: block;
      text-transform: none;
      text-decoration: none;
      text-align: center;
      text-decoration: none;
      color: black;
      transition: all 0.2s ease-in-out 0s;

      a {
        color: inherit;
        text-decoration: none;
      }
    }

    p:hover {
      padding: 0 30px 0 10px;
    }
  }

  a {
    background-color: whitesmoke;
    margin-top: 5px;
    margin-left: 2px;
    margin-right: 2px;
  }
}
</style>