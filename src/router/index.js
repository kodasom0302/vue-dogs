import { createRouter, createWebHistory } from 'vue-router'
import NoticeView from '../views/NoticeView.vue'

const routes = [
  {
    path: '/',
    name: '/',
    component: NoticeView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
