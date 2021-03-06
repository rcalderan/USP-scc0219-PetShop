/**
 * 
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai

 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Service from '../views/Service.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'
import Person from '../views/Person.vue'
import Animal from '../views/Animal.vue'
import Product from '../views/Product.vue'
import Finance from '../views/Finance.vue'
import ManageServices from '../views/ManageServices.vue'

//const grooming ={template:"<div>Grooooming</div>"}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop
  },
  {
    path: '/service',
    name: 'service',
    component: Service,
  },
  
  {
    path: '/person/animal',
    name: 'animal',
    component: Animal,
  },
  {
    path: '/admin/person',
    name: 'person',
    component: Person,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/admin',
    name:'admin',
    component: Admin,
    },
    {
      path: '/admin/service',
      name: 'manageservice',
      component: ManageServices,
    },
    {
      path: '/admin/product',
      name: 'product',
      component: Product,
    },
    {
      path: '/admin/finance',
      name: 'finance',
      component: Finance,
    },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})


export default router
