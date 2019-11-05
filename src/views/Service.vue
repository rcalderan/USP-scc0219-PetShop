<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai
-->
<template>
  <div class="service">
    <Nav/>
    <Service/>
  </div>
</template>

<script>
// @ is an alias to /src

import Service from '../components/Service';
import Nav from '../components/Nav'

export default {
  name: 'service',
  components: {
    Service,
    Nav
  }
}
</script>
