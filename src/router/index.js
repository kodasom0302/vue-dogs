import { createRouter, createWebHistory } from 'vue-router'
import NoticeListView from '../views/NoticeListView.vue'
import NoticeReadView from '../views/NoticeReadView.vue'

const routes = [
  {
    path: '/',
    name: '/',
    component: NoticeListView
  },
  {
    path: '/read',
    name: '/read',
    component: NoticeReadView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
