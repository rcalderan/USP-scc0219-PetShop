<template>
  <div class="shop">
    <Nav/>
    <Service/>
  </div>
</template>

<script>
// @ is an alias to /src

import Service from '../components/Service';
import Nav from '../components/Nav'

export default {
  name: 'shop',
  components: {
    Service,
    Nav
  }
}
</script>
