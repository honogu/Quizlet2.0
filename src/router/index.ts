import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WordsView from '../views/WordsView.vue'
import LearnView from '../views/LearnView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/words',
    name: 'words',
    component: WordsView
  },
  {
    path: '/learn',
    name: 'learn',
    component: LearnView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
