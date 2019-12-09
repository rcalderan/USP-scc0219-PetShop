<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai
-->
<template>
  <div class="financeView">
    <Nav active="finance" />
    <Finance />
  </div>
</template>

<script>
import Finance from "../components/management/Finance";
import Nav from "../components/Nav";

export default {
  name: "financeView",
  components: {
    Finance,
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
