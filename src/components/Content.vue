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
    
    <div v-else-if="person.type==='admin'">CONECTED as administer: {{person.name}}
        <br /><br /><br />Administer component here!!!!
    </div>
    <div v-else>CONECTED! Welcome {{person.name}}
        <Calendar />
        <Animals />
    </div>
  </div>
</template>

<script>
import Calendar from "./Calendar.vue";
import Animals from "./Animals.vue";

export default {
  components:{
    Calendar,
    Animals
  },
  data: () => {
    return {
      person: {
        isConnected:true,
        _id: 0,
        type: "customer",
        name: "Nina"
      }
    };
  }
};
</script>

<style>
div{
  display: block;
}
</style>