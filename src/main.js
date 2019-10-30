import Vue from 'vue'
import App from './App.vue'
//import VueRouter from 'vue-router'
//import Routes from './routes'



Vue.config.productionTip = false
/*Vue.Use(VueRouter)

const router = new VueRouter({
  Routes
})*/

new Vue({
  //router,
  render: h => h(App),
}).$mount('#app')
