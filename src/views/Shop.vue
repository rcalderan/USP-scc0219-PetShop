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
