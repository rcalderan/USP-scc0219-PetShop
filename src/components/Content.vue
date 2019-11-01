<template>
  <div id="content">
    <a href="shop.html">
      <img class="banner" src="../assets/img/5.ped-banner.jpg" />
    </a>
    <!--
    <h2>Now we're online!</h2>
    <p>Now all our services are online! You can schedule our services here! See how your pet is lucky?</p>
    <div id="newsletter">
      <h2>Keep in touch</h2>Receive our latest news and offers!
      <form>
        <input type="email" placeholder="enter your email here!" />
      </form>
    </div>-->
  </div>
</template>

<script>
import Vue from 'vue';
import Shop from "./Shop.vue";
Vue.component("Shop",Shop);

export default {
  data:function(){
    return {itens:[{a:"1",b:"2"},{a:"22",b:"33"}]}
  }
  
}

</script>

<style>
</style>