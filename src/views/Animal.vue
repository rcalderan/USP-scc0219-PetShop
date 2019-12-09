<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai
-->
<template>
  <div class="animalView">
    <Nav active="animal" />
    <Animal />
  </div>
</template>

<script>
import Animal from "../components/Animals";
import Nav from "../components/Nav";

export default {
  name: "animalView",
  components: {
    Animal,
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
