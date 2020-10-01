import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tickets from '../views/Tickets.vue'
import Mail from '../views/Mail.vue'
import Automations from '../views/Automations.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: Tickets
  },
  {
    path: '/mail',
    name: 'Mail',
    component: Mail
  },
  {
    path: '/automations',
    name: 'Automations',
    component: Automations
  }
]

const router = new VueRouter({
  routes
})

export default router
