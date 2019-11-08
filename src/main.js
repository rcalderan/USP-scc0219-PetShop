/* eslint-disable no-console */
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.config.symlink = false

/*
//import MongoDb from './database/strategies/mongodb/mongoDb'
const MongoDb = require('./database/strategies/mongodb/mongoDb')
const personSchema = require('./database/strategies/mongodb/mongoDb/schemas/personSchemma')
const Context = require('./database/strategies/base/contextStrategy')

//try connect to database

const connection = MongoDb.connect()
let context = new Context(new MongoDb(connection, personSchema))

async function getUser(id) {
  const [result] = await context.read({ _id: id},0,10)
  return result;
}
let person = getUser(1);*/

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    person:
      { _id: 7, type: "customer", name: "Richard", adress: "none", photo: "", phone: "(16) 77777-7777", email: "richardcck@usp.br", password: "rich" },
    products: [
      { _id: 1, name: "Arranhador", description: "Arranhador toca", photo: require('@/assets/arranhador_toca.jpg'), price: 35.5, stock: 22, sold: 3 },
      { _id: 2, name: "Tapete Higienico", description: "Tapete mega higienico", photo: require("@/assets/tapete_higienico_lavavel_1.jpg"), price: 20.0, stock: 18, sold: 2 },
      { _id: 3, name: "Comedouro de Aluminio", description: "Comedouro de Aluminio fodão", photo: require("@/assets/comedouro_aluminio_pesado_1.jpg"), price: 56.99, stock: 50, sold: 10 },
      { _id: 4, name: "Ração de Gato", description: "Ração de gato Cat finissimo 8kg", photo: require("@/assets/kets_finissimo_8kg.jpg"), price: 35.5, stock: 22, sold: 3 },
      { _id: 5, name: "Ração de Gato (renal)", description: "Ração de gato para tratamento de gato com rin zoado", photo: require("@/assets/renal--2-.png"), price: 35.5, stock: 22, sold: 3 },
      { _id: 6, name: "Ração de Cachorro", description: "Ração de Cachorro fedida", photo: require("@/assets/arranhador_toca.jpg"), price: 35.5, stock: 22, sold: 3 },
      { _id: 7, name: "Vacina top", description: "Vacina topVacina topVacina topVacina top", photo: require("@/assets/arranhador_toca.jpg"), price: 35.5, stock: 22, sold: 3 },
      { _id: 8, name: "Brinquedo", description: "BrinquedoBrinquedoBrinquedoBrinquedoBrinquedoBrinquedo", photo: require("@/assets/arranhador_toca.jpg"), price: 35.5, stock: 22, sold: 3 },
      { _id: 9, name: "Outro brinquedo", description: "Outro brinquedoOutro brinquedoOutro brinquedoOutro brinquedo", photo: require("@/assets/arranhador_toca.jpg"), price: 35.5, stock: 22, sold: 3 },
    ],
    animals: [
      { _id: 1, owner: 7, type: "cat", race: "SnowShoe", name: "Miaka", photo: "imgsrc", age: new Date(1998, 1, 1) },
      { _id: 2, owner: 7, type: "dog", race: "bodercolie", name: "Pipoca", photo: "imgsrc", age: new Date(2018, 1, 1) },
      { _id: 3, owner: 2, type: "dog", race: "viralata", name: "Food", photo: "imgsrc", age: new Date(2016, 1, 1) },
      { _id: 4, owner: 5, type: "cat", race: "Siames", name: "Fluffy", photo: "imgsrc", age: new Date(2012, 1, 1) },
      { _id: 5, owner: 4, type: "dog", race: "poodle", name: "snowwhite", photo: "imgsrc", age: new Date(2015, 1, 1) },
      { _id: 6, owner: 6, type: "dog", race: "Cheewawa", name: "Demon", photo: "imgsrc", age: new Date(2009, 1, 1) },
      { _id: 7, owner: 3, type: "dog", race: "bodercolie", name: "Mr. Picles", photo: "imgsrc", age: new Date(2007, 1, 1) }
    ],
    services:[
      {_id:1,name:"Consulta",description:"Consulta veterinária para seu pet e pra você...",price:120.0},
      {_id:2,name:"Grooming",description:"Tosa para seu bixinho! ele vai ficar fofo",price:60.0},
      {_id:3,name:"Vacina",description:"Vacine seu animal!!!!",price:150.0},
  ]
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
