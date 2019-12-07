<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai
-->
<template>
  <div class="personView">
    <Nav />
    <Person />
  </div>
</template>

<script>
import Person from "../components/management/Person";
import Nav from "../components/Nav";

export default {
  name: "personView",
  components: {
    Person,
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
