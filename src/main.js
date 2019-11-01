import Vue from 'vue'
import App from './App.vue'
//import VueRouter from 'vue-router'
//import Routes from './routes'



Vue.config.productionTip = false
/*
Vue.Use(VueRouter)
const router = new VueRouter({
  
  Routes
})*/

new Vue({
 //router,
 data:[{a:"a1",b:"b1"},{a:"a2",b:"b2"},{a:"a3",b:"b3"},],
  render: h => h(App),
}).$mount('#app')
