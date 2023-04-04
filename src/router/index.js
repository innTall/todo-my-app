import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomePage.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/LoginPage.vue'),
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/SignupPage.vue'),
      meta: {
        requiresGuest: true
      }
    }
  ]
});
export default router;