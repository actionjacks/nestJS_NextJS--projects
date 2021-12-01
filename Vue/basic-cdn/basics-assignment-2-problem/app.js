const app = Vue.createApp({
  data() {
    return { inputValue: "" };
  },
  methods: {
    alertBtn() {
      alert("yoloooo");
    },
    handleInput(e) {
      this.inputValue = e.target.value;
    },
  },
}).mount("#assignment");
