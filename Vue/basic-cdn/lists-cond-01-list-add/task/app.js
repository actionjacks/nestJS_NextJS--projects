const app = Vue.createApp({
  data() {
    return {
      inputTask: "",
      taskList: true,
      tasks: [],
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.inputTask);
    },
    toggleShowList() {
      this.taskList = !this.taskList;
    },
  },
  computed: {
    buttonCaption() {
      return this.taskList ? "Hide" : "Show List";
    },
  },
});
app.mount("#assignment");
