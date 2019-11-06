import Vue from 'vue'
import App from './App.vue'
import router from './router'
const VueLocalStorage = require('vue-localstorage');


Vue.use(VueLocalStorage);

Vue.config.productionTip = false

new Vue({
  data:{
    person:{}
  },
  localStorage: {
    person: {
      type: Object,
      default: {
        _id:-1,
        type:"notLogged",
        name:"unknown"
      }
    },
  },
  router,
  mounted:()=>{
  },
  render: h => h(App)
}).$mount('#app')
