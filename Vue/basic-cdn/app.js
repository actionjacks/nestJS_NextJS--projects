Vue.createApp({
  data() {
    return {
      goals: [],
      enteredBalue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredBalue);
      this.enteredBalue = "";
    },
  },
}).mount("#app");
