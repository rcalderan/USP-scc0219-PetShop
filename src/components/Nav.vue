<template>
  <div id="nav">
    <ul>
      <li>
        <a class="active" href="index.html">Home</a>
      </li>
      <li>
        <a href="services.html">Services</a>
      </li>
      <li>
        <a href="shop.html">Shop</a>
      </li>
      <li>
        <a href="contact.html">Contact</a>
      </li>
      <li style="float:right">
        <a href="about.html">About</a>
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
}

li:last-child {
  border-right: none;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #4caf50;
}
</style>