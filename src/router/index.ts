import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import ('../views/FolderPage.vue')
  },
  {
    path: '/bag',
    component: () => import ('../views/BagPage.vue')
  },
  {
    path: '/success',
    component: () => import ('../views/SuccessPage.vue')
  },
  {
    path: '/foods',
    component: () => import ('../views/Foods/indexPage.vue')
  },
  {
    path: '/foods/:id',
    component: () => import ('../views/Foods/showPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
