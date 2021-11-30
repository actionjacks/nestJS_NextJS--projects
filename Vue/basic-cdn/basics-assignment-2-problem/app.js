const app = Vue.createApp({
  data() {
    inputValue = "";
  },
  methods: {
    alertBtn() {
      alert("yoloooo");
    },
    handleInput(e) {
      this.inputValue = e.target.value;
    },
  },
});
