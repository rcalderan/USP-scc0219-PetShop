<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai

-->
<template>
  <div id="nav">
    <ul>
      <li v-if="active==='home'" :class="{active}">
        <router-link to="/">Home</router-link>
      </li>
      <li v-else>
        <router-link to="/">Home</router-link>
      </li>
      <li v-if="active==='service'" :class="{active}">
        <router-link to="/service">Services</router-link>
      </li>
      <li v-else>
        <router-link to="/service">Services</router-link>
      </li>
      <li v-if="active==='shop'" :class="{active}">
        <router-link to="/shop">Shop</router-link>
      </li>
      <li v-else>
        <router-link to="/shop">Shop</router-link>
      </li>
      <li v-if="active==='contact'" :class="{active}">
        <router-link to="/contact">Contact</router-link>
      </li>
      <li v-else>
        <router-link to="/contact">Contact</router-link>
      </li>
      <li v-if="active==='about'" :class="{active}" style="float:right">
        <router-link to="/about">About</router-link>
      </li>
      <li v-else style="float:right">
        <router-link to="/about" >About</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    active: {type: String}
  }
};
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
  border-right: 1px solid #bbb;

  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
li:hover {
  cursor: pointer;
}

li:last-child {
  border-right: none;
}

li:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #4caf50;
}
a,a:visited{
  color: #fff;
  text-decoration: none;
}

.active a:visited, .active a{
  color: #fff;
}

</style>