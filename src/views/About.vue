<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai
-->
<template>
  <div class="about">
    <Nav active="about"/>
    <router-link to="/shop">
      <img class="banner" src="../assets/map.jpg" />
    </router-link>
    <h1>About us</h1>
    <p>Founded in 1986, PetSmart, Inc. is the largest specialty pet retailer of services and solutions for the lifetime needs of pets. At PetSmart, we love pets, and we believe pets make us better people. Every day with every connection, PetSmart’s passionate associates help bring pet parents closer to their pets so they can live more fulfilled lives. This vision impacts everything we do for our customers, the way we support our associates, and how we give back to our communities.</p>

    <p>We employ approximately 56,000 associates and operate more than 1,650 pet stores in the United States, Canada and Puerto Rico as well as more than 200 in-store PetSmart PetsHotel dog and cat boarding facilities. PetSmart provides a broad range of competitively priced pet food and products and offers unique pet services including training, pet grooming, boarding, PetSmart Doggie Day Camp and in-store pet adoptions.</p>
  
  </div>
</template>

<script>
import Nav from "../components/Nav";

export default {
  name: "about",
  components: { Nav }
};
</script>

