<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai
-->
<template>
  <div id="app">
    <Header/>
    <router-view />
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'app',
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
