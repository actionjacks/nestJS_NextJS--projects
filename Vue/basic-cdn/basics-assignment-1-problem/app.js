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
      fullNameeeee: "",
    };
  },

  watch: {
    inputValue() {
      //console.log("this watcher well trigger after inputValue change");
    },
    counter(newValue) {
      console.log("counter", newValue);
      if (newValue > 50) {
        this.counter = 0;
      }
    },
  },

  computed: {
    fullName() {
      if (this.inputValue === "") {
        return "";
      } else {
        return this.inputValue + " " + "Zablockie";
      }
    },
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
    resetInput() {
      this.inputValue = "";
    },
  },
});
app.mount("#assignment");
