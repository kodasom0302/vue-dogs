import { createRouter, createWebHistory } from 'vue-router'
import NoticeListView from '../views/NoticeListView.vue'
import NoticeReadView from '../views/NoticeReadView.vue'
import NoticeWriteView from '../views/NoticeWriteView.vue'
import NoticeModifyView from '../views/NoticeModifyView.vue'

const routes = [
  {
    path: '/',
    name: '/list',
    component: NoticeListView
  },
  {
    path: '/notice/read/:no',
    name: '/read',
    component: NoticeReadView
  },
  {
    path: '/notice/write',
    name: '/write',
    component: NoticeWriteView
  },
  {
    path: '/notice/modify',
    name: '/modify',
    component: NoticeModifyView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
