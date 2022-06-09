import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage'
import FacilitiesPage from '@/pages/FacilitiesPage'
import RoomsPage from '@/pages/RoomsPage'
import ContactUsPage from '@/pages/ContactUsPage'

const routes = [
  {
    path: '/',
    component: HomePage
  },

  {
    path: '/facilities',
    component: FacilitiesPage
  },

  {
    path: '/rooms',
    component: RoomsPage
  },

  {
    path: '/contacts',
    component: ContactUsPage
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
