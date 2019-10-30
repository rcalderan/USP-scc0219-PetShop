<template>
  <div id="app">
    <Header />
    <Nav />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Nav from "./components/Nav.vue";
import Content from "./components/Content.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
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
