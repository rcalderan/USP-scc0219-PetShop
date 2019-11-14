<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai

-->
<template>
  <div id="management">
    <div v-if="user.type==='admin'">
      <Finance />
      <div v-if="person">
        <Person />
      </div>
      <div v-if="service">
        <Service />
      </div>
      <div v-if="product">
        <Product />
      </div>
    </div>
  </div>
</template>

<script>
import Finance from "./management/Finance";
import Person from "./management/Person";
import Service from "./management/Service";
import Product from "./management/Product";
export default {
  name: "management",
  components: {
    Finance,
    Person,
    Product,
    Service
  },
  props: {
    person: {
      type: Boolean,
      default: true
    },
    product: {
      type: Boolean,
      default: true
    },
    service: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    user() {
      return this.$store.state.person;
    }
  }
};
</script>

<style>
</style>