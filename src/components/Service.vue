<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai

-->
<template>
  <div class="service">
    <!--h2>User {{ $route.params.id }}</h2>-->
    <router-link to="/service">
      <img src="../assets/New_All_Services_Hero.png" style="width: 100%;" />
    </router-link>

    <div v-if="person.type==='customer'">
      <Calendar />
    </div>
    <div v-else>
      <h1>Services</h1>
      <h3>Grooming</h3>
      <p>Making dogs & cats look great is our passion! Our academy-trained Pet Stylists have over 800 hours of hands-on grooming instruction that includes bathing, trimming & styling at least 200 dogs of all breeds & sizes plus annual safety certification. We offer complete bath, haircut & walk-in grooming services. Book your pet's salon appointment today</p>
      <p>Wanna know more about it? See how it works!</p>

      <router-link to="/login">log in and schedule now!</router-link>

      <h3>veterinary care</h3>
      <p>
        Prevention is Our Promise
        PetSmart knows prevention is a very powerful thing.
        Through twice-a-year comprehensive veterinary exams and year-round attention, you have a partner in preventive health care. Banfield provides pet health information and pet care tools to help you become the educated and prepared owner that your pet deserves. Together, we can monitor and track over time many of the facets of your pet's wellness: dental care, behavior, parasite control, nutrition, and vaccinations.
        Prevention is about peace of mind – the kind that comes from knowing that you are proactively monitoring the health and wellness of the pets you love. Banfield would love to partner with you in the ongoing care of your pet.
      </p>
      <router-link to="/login">log in and schedule now!</router-link>
    </div>
  </div>
</template>

<script>
import Calendar from "./Calendar.vue";
export default {
  computed: {
    person() {
      return this.$store.state.person;
    }
  },
  components: {
    Calendar
  }
};
</script>

<style>
body {
  text-align: center;
}
.service {
  background-color: rgb(213, 255, 215);
}
</style>