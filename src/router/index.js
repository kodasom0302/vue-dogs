import { createRouter, createWebHistory } from 'vue-router'
import NoticeListView from '../views/NoticeListView.vue'
import NoticeReadView from '../views/NoticeReadView.vue'
import NoticeWriteView from '../views/NoticeWriteView.vue'
import NoticeModifyView from '../views/NoticeModifyView.vue'

const routes = [
  {
    path: '/announcements',
    name: 'noticeList',
    component: NoticeListView
  },
  {
    path: '/noticeModify/:no',
    name: 'noticeModify',
    component: NoticeModifyView
  },
  {
    path: '/noticeRead/:no',
    name: 'noticeRead',
    component: NoticeReadView
  },
  {
    path: '/noticeWrite',
    name: 'noticeWrite',
    component: NoticeWriteView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
