import { createApp } from "vue";
import PacmanLoader from "vue-spinner/src/PacmanLoader.vue";
import App from "./App.vue";

createApp(App).component("pacman-loader", PacmanLoader).mount("#app");
