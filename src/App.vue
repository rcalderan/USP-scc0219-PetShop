<template>
  <div id="app">
    <Header />
    <Nav />
    <ul>
      <li v-for="item in data" :key="item.a">
        AAAAAAAAAAAAAa
        {{ item.a }}
      </li>
    </ul>
    <span v-on="clock">

    </span>
    <Content />
    <Footer />
    <!-- <router-view></router-view>-->
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Nav from "./components/Nav.vue";
import Content from "./components/Content.vue";
import Footer from "./components/Footer.vue";
//import MockDb from "./assets/js/database/mock/MockDb";


//const products = MockDb.product();
export default {
  el: "app",
  components: {
    Header,
    Nav,
    Content,
    Footer
  }
};
</script>

<style>
#app {
  text-align: center;
  margin: auto;
  width: 75%;
  min-height: 100vh;
}
</style>
