import { createApp, provide, h } from 'vue';
import { createPinia } from 'pinia';
import router from './router/index.js';
import './index.css';
import App from './App.vue';
import { createApolloClient } from './apolloClient';
import { DefaultApolloClient } from '@vue/apollo-composable';

const app = createApp({
  setup() {
    provide(DefaultApolloClient, createApolloClient())
  },
  render: () => h(App)
});
const pinia = createPinia();

app.use(pinia).use(router).mount('#app');