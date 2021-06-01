import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: '首页' }
  },
  {
    path: '/eventLevel',
    name: 'eventLevel',
    component: () => import('@/views/event-level/index.vue'),
    meta: { title: '事件等级' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
