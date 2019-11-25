<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai



-->
<template>
  <div id="header">
    <div id="logo">
      <img class="img-fluid" src="../assets/petsmart-logo.png" alt="logo" />
      <h3>The best for your pet</h3>
    </div>
    <div id="header-content">
      <div id="header-search">
        <form>
          <input v-on:click="headerSearch" class="searchBar" type="text" placeholder="search" />
        </form>
      </div>
      <div id="header-login">
        <div v-if="person.type==='customer'">
          Welcome {{person.name}}
          <button v-on:click="logout">Logout</button>
        </div>
        <div v-else-if="person.type==='admin'">
          Welcome administer {{person.name}}
          <button v-on:click="logout">Logout</button>
        </div>
        <div v-else>
          <router-link to="/login">
            <button class="log">Login</button>
          </router-link>
          <button class="log test" v-on:click="logShortcut(2)">log as customer A</button>
          <button class="log test" v-on:click="logShortcut(3)">log as customer B</button>
          <button class="log test" v-on:click="logShortcut(1)">log as admin </button>
        </div>
      </div>
    </div>
  </div>
  <!-- <div v-if="!person.isConnected">  @click="$emit('onClick',label)
      <h2>Now we're online!</h2>
      <p>Now all our services are online! You can schedule our services here! See how your pet is lucky?</p>
    </div>
    
    <div v-else-if="person.type==='admin'">CONECTED as administer: {{person.name}}
        <br /><br /><br />Administer component here!!!!
    </div>
    <div v-else>CONECTED! Welcome {{person.name}}
        <Calendar />
  </div>-->
</template>

<script>


export default {
  computed:  {
    person(){//returns the logged person
      return this.$store.state.person;
    }
  },
  methods: {

    logout: function() {//logout 
      localStorage.removeItem("uid")
      this.$store.state.person={}
      this.$router.push('/')
    },
    headerSearch:function(){
      this.$router.push('/shop');
    },
    logShortcut: async function(id){
      //log as customer
      localStorage.uid = id
      await this.$store.dispatch('setUser',localStorage.uid)
      this.$router.push('/')    
    }
  }
};
</script>

<style>
#header {
  position: relative;
  margin: auto;
  width: 100%;
  height: 100px;
}

.banner {
  width: 100%;
}
.log {
  width: 70%;
}
.log .test {
  margin-top: 10px;
  width: 35%;
}
#logo {
  text-align: center;
  position: absolute;
  left: 0;
  width: 30%;
  height: 100px;
}
#header-content {
  position: absolute;
  right: 0;
  width: 70%;
  height: 100%;
}

#header-search {
  position: relative;
  float: left;
  width: 60%;
}
.searchBar {
  margin: 30px 0;
  height: 32px;
  line-height: 25px;
  border: 1px solid darkolivegreen;
  width: 100%;
}

#header-login {
  position: relative;
  float: right;
  padding-bottom: 0;
  width: 40%;
}
#header-login input {
  float: right;
  margin-bottom: 1px;
  width: 50%;
}
</style>