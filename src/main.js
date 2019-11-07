/* eslint-disable no-console */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

/*
const MongoDb = require('./database/strategies/mongodb/mongoDb')
const personSchema = require('./database/strategies/mongodb/mongoDb/schemas/personSchemma')
const Context = require('./database/strategies/base/contextStrategy')

//try connect to database

const connection = MongoDb.connect()
let context = new Context(new MongoDb(connection, personSchema))
*//*
var person1 = ()=> {
  //const [result] = await context.read({ _id: 1},0,1)
  //console.log(result);
  //return result ? result : {_id:"-1",name:"unknown",type:"customer"}
  return {_id:"-1",name:"unknown",type:"customer"}
}*/
const person={_id:"-1",name:"unknown",type:"customer"};
new Vue({
  data:{
    person,
    posts:["lala","bbb","aaa"]
  },
  router,
  mounted:()=>{
  },
  render: h => h(App)
}).$mount('#app')
