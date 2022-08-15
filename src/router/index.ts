import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import PhotoGallery from '../views/PhotoGallery.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/photo'
  },
  {
    path: '/photo',
    name: 'Photo Gallery',
    component: PhotoGallery
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
