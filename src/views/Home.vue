<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai
-->
<template>
  <div class="home">
    <Nav/>
    <Content/>
  </div>
</template>

<script>

import Content from '../components/Content';
import Nav from '../components/Nav'

export default {
  name: 'home',
  components: {
    Content,
    Nav,
  }
}
</script>
