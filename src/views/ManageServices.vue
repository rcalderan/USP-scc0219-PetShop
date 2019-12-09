<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai
-->
<template>
  <div class="serviceView">
    <Nav active="manserv" />
    <Services />
  </div>
</template>

<script>
import Services from "../components/management/Service";
import Nav from "../components/Nav";

export default {
  name: "serviceView",
  components: {
    Services,
    Nav
  }
};
</script>
<style>
#admin {
  position: relative;
  height: 100%;
  min-height: 1000px;
}
</style>
