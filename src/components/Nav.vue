<template>
  <div id="nav">
    <ul>
      <li class="active">
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/service">Services</router-link>
      </li>
      <li>
        <router-link to="/shop">Shop</router-link>
      </li>
      <li>
        <router-link to="/">Contact</router-link>
      </li>
      <li style="float:right">
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
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
</style>