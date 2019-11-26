/* eslint-disable no-console */

/**
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai */
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import Helper from './helper'//using axios for http requests


//datepicker
import VCalendar from 'v-calendar';


Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VCalendar);

//adicionamos o axios globalmente, assim ele pode ser chamado usando this.$http 
const helper =new Helper();
Vue.prototype.$http = helper;

//def vuex e addicionar os mockups que representam o banco de dados
const store = new Vuex.Store({
  state: {
    person:{},
    persons: [],//persons[6],//usuario logado, escolha 0 (admin) pra administrador
    //{ _id: 1, type: "admin", name: "administer", photo: "", phone: "(16) 99721-2588", email: "admin", password: "admin" },
   
    products: [
      //{ _id: 1, name: "Arranhador", description: "Arranhador toca", photo: require('@/assets/arranhador_toca.jpg'), price: 35.5, stock: 2, sold: 35 },
    ],
    carts: [//carrinho de todos usuarios
      //{ _id: 1, owner: 7, product: 8, description: "Brinquedo", count: 1, value: 20.99 },
      ],
    animals: [
      //{ _id: 1, owner: 7, type: "cat", race: "SnowShoe", name: "Miaka", photo: "imgsrc", age: 22 },
      ],
    services: [
      //{ _id: 1, name: "Consulta", description: "Consulta veterinária para seu pet e pra você...", price: 120.0 },
      ],
    schedules: [//todos horarios marcados
      //{ _id: 1, owner: 7, service: "Consulta", description: "Vet Pipoca", date: new Date(2019, 10, 9, 12, 0, 0, 0) },
    ],
    finances: [//finanças aqui
      //{ _id: 1, customer: 2, type: "service", date: new Date(2019, 5, 5, 12, 30), value: 120.0 },
    ]

  },
  mutations:{    
    setUser(state,user){
      state.person = user
    },
    updatePersons(state,persons){
      state.persons = persons
    },
    updateCarts(state,carts){
      state.carts = carts
    },
    updateAnimals(state,animals){
      state.animals = animals
    },
    updateProducts(state,products){
      state.products = products
    },
    updateServices(state,services){
      state.services = services
    },
    updateSchedules(state,schedules){
      state.schedules = schedules
    },
    updateFinances(state,finances){
      state.finances = finances
    }
  },
  actions: {
    async setUser(context,id){
      context.commit('setUser', await helper.getUser(id))

    },
    async updatePersons(context){
      const result = await helper.request().get('/api/person/')
      context.commit('updatePersons',result.data)
      return result.data
    },
    async updateCarts(context){
      const result = await helper.request().get('/api/cart/')
      context.commit('updateCarts',result.data)
      return result.data
    },
    async updateAnimals(context){
      
      const result = await helper.request().get('/api/animal/')
      context.commit('updateAnimals',result.data)
      return result.data;
    },
    async updateProducts(context){
      const result = await helper.request().get('/api/product/')
      context.commit('updateProducts',result.data)
      return result.data;
    },
    async updateServices(context){
      const result = await helper.request().get('/api/service/')
      context.commit('updateServices',result.data)
      return result.data
    },
    async updateSchedules(context){
      const result = await helper.request().get('/api/schedule/')
      context.commit('updateSchedules',result.data)
      return result.data
    },
    async updateFinances(context){
      const result = await helper.request().get('/api/finance/')
      context.commit('updateFinances',result.data)
      return result.data
    }
  }
})

//carregar as 
async function initStore(){
  await store.dispatch('updatePersons')
  await store.dispatch('updateCarts')
  await store.dispatch('updateAnimals')
  await store.dispatch('updateProducts')
  await store.dispatch('updateServices')
  await store.dispatch('updateSchedules')
  await store.dispatch('updateFinances')
} 
initStore()

new Vue({
  store,//vuex
  router,//vue-router
  async mounted() {//auto login if user is in localstorage
    if (localStorage.uid) {
      const response = await this.$http.request().get('/api/person/' + localStorage.uid)
      //alert(response)
      if (response.status === 200) {
        const user = response.data;
        this.$store.state.person = user;
      }
      else
        localStorage.removeItem('uid')
    }
  },
  methods: {
  },
  render: h => h(App)
}).$mount('#app')
