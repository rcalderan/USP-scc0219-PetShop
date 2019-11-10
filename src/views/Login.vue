<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai
-->
<template>
  <div class="home">
    <Nav active="home"/>
    <Login/>
  </div>
</template>

<script>

import Login from '../components/Login';
import Nav from '../components/Nav'

export default {
  name: 'home',
  components: {
    Login,
    Nav,
  }
}
</script>
