<template>
  <div id="shop">
    <div class="shop-content">
      <h1>PetSmart Shop</h1>
      <div class="shop-item">
        <img src="src/img/renal--2-.png" />
        <div class="item-value">$35.00</div>
        <button v-on:click="clickee">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
//import Shopitem from '../components/Shop-item';
import MockDb from "../assets/js/database/mock/MockDb";
const mock = new MockDb();

const produtos = mock.product();

export default {
  name: "shop",
  data: () => {
    return produtos;
  },
  methods: {
    clickee() {
      produtos.forEach(element => {
        alert(element.name);
      });
    },
    clock() {
      alert(mock.connect());
    }
  }
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