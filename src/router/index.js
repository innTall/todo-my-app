import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomePage.vue') 
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginPage.vue') // 5. Lazy Loading Routes
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/SignupPage.vue') // 5. Lazy Loading Routes
    }
  ]
});
export default router;