const app = Vue.createApp({
  data() {
    return { inputClass: "", paragraphVisible: true };
  },
  computed: {
    visible() {
      return this.paragraphVisible ? "visible" : "hidden";
    },
    // or multiple classes
    paraClasses() {
      return {
        user1: this.inputClass === "user1",
        user2: this.inputClass === "user2",
        visible: this.paragraphVisible,
        visible: !this.paragraphVisible,
      };
    },
  },
  methods: {
    toggleVisible() {
      this.paragraphVisible = !this.paragraphVisible;
    },
  },
});
app.mount("#assignment");
