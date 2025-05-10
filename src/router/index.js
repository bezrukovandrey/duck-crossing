import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import { store } from './../store.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView,
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('../views/ShopView.vue'),
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/CheckoutView.vue'),
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('../views/EventsView.vue'),
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/PortfolioView.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  store.setLoading(true);
  next();
});

router.afterEach(() => {
  setTimeout(() => {
    store.setLoading(false);
  }, 1000); 
});

export default router
