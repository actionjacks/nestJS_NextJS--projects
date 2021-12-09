const app = Vue.createApp({
  data() {
    return {};
  },
});
app.component("friend-contact", {
  template: `<h1>lorem</h1>`,
  data() {
    return {};
  },
  methods: {},
});
app.mount("#app");

// in main index.html <friend-contact></friend-contact>
