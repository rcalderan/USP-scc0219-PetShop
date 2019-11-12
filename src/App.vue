<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai
-->
<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer/>
  </div>
</template>

<script>
//import Vue from "vue";
import Header from './components/Header';
import Footer from './components/Footer';

//as rotas msão carregadas no elemento <router-view />, definido pelo vue-router;
//basica,ente carregam todos os componentes da pasta views, portanto o site sempre teraá esta estrutura

export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
}
</script>


<style>
#app {
  margin: auto;
  width: 75%;
  min-height: 100vh;
}
input{
  text-align: center;
}
</style>
