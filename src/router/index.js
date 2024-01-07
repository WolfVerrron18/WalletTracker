import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainLayout,
      children: [
        {
          path: '/',
          name: 'categories',
          meta: { title: 'Категории' },
          component: () => import('@/views/Categories.vue'),
        }
      ],
    },
  ]
})

router.beforeEach((to, from, next) => {
  const { title } = to.meta

  document.title = `${document.title}  ${title}`;

  next();
});

export default router
