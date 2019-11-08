<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai
-->
<template>
  <div id="content">
    <router-link to="/Shop">
      <img class="banner" src="../assets/5.ped-banner.jpg" />
    </router-link>

    <div v-if="person.type==='customer'">
        CONECTED! Welcome {{person.name}}
        <Calendar />
        <Animals />
    </div>
    
    <div v-else-if="person.type==='admin'">CONECTED as administer: {{person.name}}
        <br /><br /><br />Administer component here!!!!
    </div>
    <div v-else>
      
      <h2>Now we're online!</h2>
      <p>Now all our services are online! You can schedule our services here! See how your pet is lucky?</p>
     
    </div>
  </div>
</template>

<script>
import Calendar from "./Calendar.vue";
import Animals from "./Animals.vue";
export default {
  computed:  {
    person(){
      return this.$store.state.person;
    }
  },
  components:{
    Calendar,
    Animals
  },
};
</script>

<style>
div{
  display: block;
}
</style>