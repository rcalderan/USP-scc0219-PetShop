<template>
  <div id="app">
    <Header/>
    <router-view />
    <button v-on:click="counter++" > click!</button>
    <span >{{counter}}</span>
    <ol>
      <li v-for="p in produtos"  v-bind:key="p.id" >
        {{p.price}}

      </li>
    </ol>
    <span v-if="1>=2">test</span>
    
    <span v-else>nada</span>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'app',
  data: ()=>{
    return {counter: 0}
  },
  components: {
    Header,
    Footer
  }
}
</script>


<style>
#app {
  margin: auto;
  width: 75%;
  min-height: 100vh;
}
</style>
