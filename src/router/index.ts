import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home.vue'
import Video from '../pages/Video.vue'
import Channel from '../pages/Channel.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/video',
    name: 'Video',
    component: Video
  },
  {
    path: '/channel',
    name: 'Channel',
    component: Channel
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
