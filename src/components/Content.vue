<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai
-->
<template>
  <div id="content">
    <router-link to="/Shop">
      <img class="banner" src="../assets/5.ped-banner.jpg" />
    </router-link>

    <div v-if="!person.isConnected">
      <h2>Now we're online!</h2>
      <p>Now all our services are online! You can schedule our services here! See how your pet is lucky?</p>
    </div>
    <div v-else>CONECTED! Welcome {{person.name}}</div>
  </div>
</template>

<script>
import Vue from "vue";
import Shop from "./Shop.vue";
Vue.component("Shop", Shop);

export default {
  data: () => {
    return {
      person: {
        isConnected:false,
        _id: 0,
        name: "None"
      }
    };
  }
};
</script>

<style>
</style>