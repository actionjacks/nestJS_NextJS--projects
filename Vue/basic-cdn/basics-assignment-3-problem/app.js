const app = Vue.createApp({
  data() {
    return { counter: 0, result: "" };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
  },
  computed: {
    displayResult() {
      if (this.counter > 37) {
        return (this.result = "Too much!");
      } else return (this.result = "");
    },
  },
  watch: {
    counter(val) {
      let id = null;
      if (val >= 37) {
        id = setTimeout(() => {
          this.counter = 0;
          clearTimeout(id);
        }, 5000);
      }
    },
  },
}).mount("#assignment");
