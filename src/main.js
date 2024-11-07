import { createApp } from "vue";
import WebApp from "@twa-dev/sdk";
import "./assets/tailwind.css";
import App from "./App.vue";

WebApp.ready();

const app = createApp(App);

app.mount("#app");
