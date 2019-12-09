<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai
-->
<template>
  <div class="productView">
    <Nav active="product" />
    <Product />
  </div>
</template>

<script>
import Product from "../components/management/Product";
import Nav from "../components/Nav";

export default {
  name: "productView",
  components: {
    Product,
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
