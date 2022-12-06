import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/pendentes',
      name: 'Pending',
      component: () => import('../views/PendingView.vue'),
    },
    {
      path: '/concluidos',
      name: 'Done',
      component: () => import('../views/DoneView.vue'),
    },
    {
      path: '/pesquisa',
      name: 'Search',
      component: () => import('../views/SearchView.vue'),
    },
  ],
})

export default router
