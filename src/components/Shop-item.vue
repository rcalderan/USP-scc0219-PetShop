<template>
  <div class="shop-item">
    <img src="src/img/renal--2-.png" />
    <div class="item-value">${{price}}</div>
    <button>Buy</button>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: "src/img/renal--2-.png"
    },
    price: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style>
</style>