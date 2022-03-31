import { createRouter, createWebHistory } from 'vue-router'
import TheHome from '../views/TheHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'TheHome',
      component: TheHome
    },
    {
      path: '/sightseeing',
      name: 'Thesightseeing',
      component: () => import('../views/TheSightseeing.vue')
    },
    {
      path: '/events',
      name: 'Events',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/InArbeit.vue'),
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: () => import('../components/InArbeit.vue'),
    },
    {
      path: '/lifestyle',
      name: 'Lifestyle & Szene',
      component: () => import('../components/InArbeit.vue')
    }
  ]
})

export default router
