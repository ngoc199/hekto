import { createApp } from "vue";
import { createPinia } from "pinia";

import "font-awesome/css/font-awesome.min.css";
import "@fontsource/lato";
import "@fontsource/josefin-sans";
import "@/assets/base.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
