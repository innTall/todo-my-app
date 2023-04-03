import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router/index.js';
import './index.css';
import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia).use(router).mount('#app');