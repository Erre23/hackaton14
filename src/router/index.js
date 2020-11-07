import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/colaboradores',
    name: 'Colaboradores',
    component: () => import('../views/Colaboradores.vue')
  },
  {
    path: '/contactanos',
    name: 'Contactanos',
    component: () => import('../views/Contactanos.vue')
  },
  {
    path: '/ubicanos',
    name: 'Ubicanos',
    component: () => import('../views/Ubicanos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
