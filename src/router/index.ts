import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Início',
      component: () => import('../views/index.vue'),
    },
    {
      path: '/pendentes',
      name: 'Pendentes',
      component: () => import('../views/pending.vue'),
    },
    {
      path: '/concluidos',
      name: 'Concluídos',
      component: () => import('../views/done.vue'),
    },
    {
      path: '/pesquisa',
      name: 'Pesquisa',
      component: () => import('../views/search.vue'),
    },
  ],
})
