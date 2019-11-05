<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai

-->
<template>
  <div class="shop">
    <Nav/>
    <Shop/>
      </div>
</template>

<script>
// @ is an alias to /src

import Shop from '../components/Shop';
import Nav from '../components/Nav'

export default {
  name: 'shop',
  components: {
    Shop,
    Nav,
  }
}
</script>
