const axios = require('axios')

const vuexOp = {
    
  mutations:{
    
    setUser(state,user){
      state.person = user;
    },
  },
  actions: {
    async setUser(context,user){
      context.commit('setUser', user)

    }
  }
}

class Http{
    
    constructor(){
        this.axios = axios
        this.vuexOptions = vuexOp
    }
    async getUser(id){
        const response = await this.axios.get('/api/person/'+id)
        //alert(response)
        if(response.status===200){
           // alert('ok')
          return response.data;
          
        }else{ 
            //alert('!ok')
            return null

        }
    }
    request(){
        return axios;
    }
    getImgUrl(src){
      return require(src)
    }
}


export default Http