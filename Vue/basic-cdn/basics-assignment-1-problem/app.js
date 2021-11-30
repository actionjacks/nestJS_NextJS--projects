const app = Vue.createApp({
  data() {
    return {
      myName: "Jacek",
      myAge: 28,
      imgUrl:
        "https://pbs.twimg.com/profile_images/1010161010613731328/hk1t-rEN.jpg",
      counter: 0,
      inputValue: "",
      confiremdName: "",
    };
  },
  methods: {
    ageInFiveYears() {
      return this.myAge + 5;
    },
    randomNum() {
      let y = Math.random();
      if (y < 0.5) y = 0;
      else y = 1;
      return y;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce() {
      this.counter--;
    },
    setName(e) {
      this.inputValue = e.target.value;
    },
    confirmInput() {
      this.confiremdName = this.inputValue;
    },
    submitForm(e) {
      return;
    },
  },
});
app.mount("#assignment");
