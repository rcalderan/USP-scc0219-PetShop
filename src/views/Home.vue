<template>
  <div class="home">
    <Nav/>
    <Content/>
  </div>
</template>

<script>
// @ is an alias to /src

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
