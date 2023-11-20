import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.scss";
import pinia from './store/store';

const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");
