import { createApp } from "vue";
import VueIframe from "vue-iframes";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@/assets/main.scss';


createApp(App).use(store).use(router).use(VueIframe).mount("#app");
