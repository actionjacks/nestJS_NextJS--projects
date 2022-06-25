import { createStore } from "vuex";
import themeModule from "@/store/modules/themeModule";

export default createStore({
  modules: {
    theme: themeModule,
  },
});
