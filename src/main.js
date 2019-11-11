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
let persons= [

  { _id: 1, type: "adm", name: "administer", photo: "", phone: "(16) 99721-2588", email: "admin@smartpet.com", password: "admin" },
  { _id: 2, type: "customer", name: "Xing xong", photo: "", phone: "(16) 85799-1154", email: "xing@tinglong.com", password: "xing" },
  { _id: 3, type: "customer", name: "Jonas", photo: "", phone: "(16) 33333-1333", email: "jonas@hotmail.com", password: "" },
  { _id: 4, type: "customer", name: "Natalia", photo: "", phone: "(16) 4444-1144", email: "nat@gmail.com", password: "" },
  { _id: 5, type: "customer", name: "John Doe", photo: "", phone: "(16) 55555-5555", email: "JD@nada.com", password: "" },
  { _id: 6, type: "customer", name: "Picadilhaloca", photo: "", phone: "(16) 66666-6666", email: "pica@comom.com", password: "" },
  { _id: 7, type: "customer", name: "Richard", photo: "", phone: "(16) 77777-7777", email: "richardcck@usp.br", password: "rich" },
]
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    persons,
    person: persons[6],

    products: [
      { _id: 1, name: "Arranhador", description: "Arranhador toca", photo: require('@/assets/arranhador_toca.jpg'), price: 35.5, stock: 2, sold: 35 },
      { _id: 2, name: "Tapete Higienico", description: "Tapete mega higienico", photo: require("@/assets/tapete_higienico_lavavel_1.jpg"), price: 20.0, stock: 18, sold: 2 },
      { _id: 3, name: "Comedouro de Aluminio", description: "Comedouro de Aluminio fodão", photo: require("@/assets/comedouro_aluminio_pesado_1.jpg"), price: 56.99, stock: 50, sold: 10 },
      { _id: 4, name: "Ração de Gato", description: "Ração de gato Cat finissimo 8kg", photo: require("@/assets/kets_finissimo_8kg.jpg"), price: 35.5, stock: 22, sold: 3 },
      { _id: 5, name: "Ração de Gato (renal)", description: "Ração de gato para tratamento de gato com rin zoado", photo: require("@/assets/renal--2-.png"), price: 35.5, stock: 22, sold: 3 },
      { _id: 6, name: "Ração de Cachorro", description: "Ração de Cachorro fedida", photo: require("@/assets/arranhador_toca.jpg"), price: 35.5, stock: 22, sold: 3 },
      { _id: 7, name: "Vacina top", description: "Vacina topVacina topVacina topVacina top", photo: require("@/assets/arranhador_toca.jpg"), price: 35.5, stock: 22, sold: 3 },
      { _id: 8, name: "Brinquedo", description: "Brinquedo Brinquedo Brinquedo Brinquedo Brinquedo Brinquedo", photo: require("@/assets/arranhador_toca.jpg"), price: 35.5, stock: 22, sold: 3 },
      { _id: 9, name: "Outro brinquedo", description: "Outro brinquedo Outro brinquedo Outro brinquedo Outro brinquedo", photo: require("@/assets/arranhador_toca.jpg"), price: 35.5, stock: 22, sold: 3 },
    ],
    carts:[
      { _id: 1, owner: 7, product:8, description: "Brinquedo", count:1,value: 20.99 },
      { _id: 2, owner: 9, product:8, description: "Outro brinquedo", count:1,value: 10.99 },
      { _id: 3, owner: 6, product:8, description: "Ração de Cachorro",count:1, value: 120.99 },
      { _id: 4, owner: 2, product:8, description: "Tapete Higienico",count:1, value: 10.99 },
      { _id: 5, owner: 1, product:8, description: "Arranhador",count:1, value: 120.99 },
      { _id: 5, owner: 7, product:8, description: "Arranhador",count:2, value: 120.99 },

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
    services: [
      { _id: 1, name: "Consulta", description: "Consulta veterinária para seu pet e pra você...", price: 120.0 },
      { _id: 2, name: "Grooming", description: "Tosa para seu bixinho! ele vai ficar fofo", price: 60.0 },
      { _id: 3, name: "Vacina", description: "Vacine seu animal!!!!", price: 150.0 },
    ],
    schedules: [
      { _id: 1, owner: 7,  type:"Consulta", description: "Vet Pipoca", date: new Date(2019, 11, 9, 12, 0, 0, 0) },
      { _id: 2, owner: 7,  type:"Grooming", description: "Grooming Pipoca", date: new Date(2019, 11, 9, 12, 30, 0, 0) },
      { _id: 3, owner: 7,  type:"Grooming", description: "take Pipoca", date: new Date(2019, 11, 9, 10, 30, 0, 0) }
    ],
    finances:[
      {_id:1,customer:2,type:"service",date:new Date(2019,5,5,12,30),value:120.0},
      {_id:2,customer:5,type:"product",date:new Date(2019,5,15,12,30),value:120.0},
      {_id:3,customer:7,type:"service",date:new Date(2019,5,21,12,30),value:150.0},
      {_id:4,customer:2,type:"product",date:new Date(2019,6,1,9,0),value:35.50},
      {_id:5,customer:3,type:"product",date:new Date(2019,7,12,12,0),value:56.99},
      {_id:6,customer:6,type:"service",date:new Date(2019,8,29,15,33),value:150.0},
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
