<template>
  <!--  -->

  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>

  <!--  -->
  <div class="container">
    <list-data />
  </div>
  <div class="container">
    <div class="block" :class="{ animate: animteBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition>
      <p v-if="paraIsVisible">this is sometimes visible...</p>
    </transition>
    <!-- custom prefix name class -->
    <transition
      name="para"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
    >
      <p v-if="paraIsVisible">this is sometimes visible...</p>
    </transition>
    <button @click="animateParagraph">Toggle paragraph</button>
  </div>

  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>

  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>

  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button @click="showUsers" v-if="!usersAreVisible">Show users</button>
      <button @click="hideUsers" v-else>Hide users</button>
    </transition>
  </div>
</template>

<script>
import ListData from './components/ListData.vue';
export default {
  components: { ListData },
  data() {
    return {
      dialogIsVisible: false,
      animteBlock: false,
      paraIsVisible: false,
      usersAreVisible: false,
      enteredInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    animateBlock() {
      this.animteBlock = !this.animteBlock;
    },
    animateParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    somemethod(el) {
      console.log('before and after');
      console.log(el); //passed by vue
    },
    // methods for style using js
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      let round = 1;
      this.enteredInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enteredInterval);
          done();
        }
      }, 20);
    },
    beforeLeave(el) {
      el.style.opacity = 1;
    },
    leave(el, done) {
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    enterCancelled() {
      clearInterval(this.enteredInterval);
    },
    leaveCancelled() {
      clearInterval(this.leaveIntervals);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: 0.7s; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
/* for route animation */
.route-enter-from {
}
.route-enter-active {
  animation: slide-fade 0.5s ease-in forwards;
}
.route-enter-to {
}
.route-leave-active {
}
.animate {
  /* transform: translateX(-150px); */
  animation: slide-fade 1s ease-in forwards;
}
@keyframes slide-fade {
  0% {
    transform: translateX(0);
    scale: (1);
  }
  70% {
    transform: translateX(-100px);
    scale: (0.5);
  }
  90% {
    transform: translateX(-200px);
    scale: (0.1);
  }
  100% {
    transform: translateX(0);
    scale: (1);
  }
}

/* default animation class from vue */
.v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.v-enter-active {
  transition: all 0.3s;
}
.v-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.v-leave-active {
  transition: all 0.3s;
}
.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
/* custo prefix class */
.para-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.para-enter-active {
  transition: all 0.3s;
}
.para-enter-to {
  opacity: 1;
  transform: translateY(0);
}
/* animaion for buttons*/
.fade-button-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.fade-button-enter-active {
  transition: all 0.3s;
}
.fade-button-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.fade-button-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.fade-button-leave-active {
  transition: all 0.3s;
}
.fade-button-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
