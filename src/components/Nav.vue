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
      <div v-if="!isAdmin">
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
      </div>
      <li v-if="active==='contact'" :class="{active}">
        <router-link to="/contact">Contact</router-link>
      </li>
      <li v-else>
        <router-link to="/contact">Contact</router-link>
      </li>

      <div v-if="isAdmin" class="management">
        <li v-if="active==='management'" :class="{active}">
          <router-link to="/admin">Management</router-link>
        </li>
        <li v-else>
          <router-link to="/admin">Management</router-link>
        </li>
      </div>

      <li v-if="active==='about'" :class="{active}" style="float:right">
        <router-link to="/about">About</router-link>
      </li>
      <li v-else style="float:right">
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    active: { type: String }
  },
  computed: {
    isAdmin() {
      return this.$store.state.person.type === "admin";
    }
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
a,
a:visited {
  color: #fff;
  text-decoration: none;
}

.active a:visited,
.active a {
  color: #fff;
}

li a,
.dropbtn {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover,
.dropdown:hover .dropbtn {
  background-color: #4caf50;
}

li.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>