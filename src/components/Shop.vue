<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai

-->
<template>
  <div id="shop">
    <div class="shop-content">
      <h1>PetSmart Shop</h1>
      <div class="shop-item" v-for="p in products" v-bind:key="p._id">
        <img v-bind:alt="p.name" v-bind:src="p.photo" />
        <div class="item-value">${{p.price}}</div>
        <button v-on:click="buy">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "shop",
  computed:  {
    person(){
      return this.$store.state.person;
    },
    products(){
      return this.$store.state.products;
    }
  },
};
</script>

<style>
.shop-content {
  position: relative;
  width: 100%;
}
.shop-content h1 {
  color: #4caf50;
}
.shop-item {
  position: relative;
  display: block;
  width: 250px;
  height: 260px;
  border: 1px solid #111;
  float: left;
  margin: 10px 0 0 30px;
}
.shop-item:hover {
  border: 2px solid #4caf50;

  width: 248px;
  height: 258px;
}

.item-value {
  font-size: 30px;
}
.shop-item img {
  width: 200px;
  height: 200px;
}
.shop-item button {
  width: 100%;
  background-color: #4caf50;
  margin-bottom: 1px;
}
</style>