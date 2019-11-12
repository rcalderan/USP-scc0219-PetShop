<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai
-->
<template>
  <div class="admin">
    <Nav active="management" />
    <Management />
  </div>
</template>

<script>
import Management from "../components/Management";
import Nav from "../components/Nav";

export default {
  name: "admin",
  components: {
    Management,
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
