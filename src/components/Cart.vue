<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai

-->
<template>
  <div id="cart">
    <h2>My Cart</h2>
    <table id="cart_table">
      <tr>
        <th>Item</th>
        <th>amount</th>
        <th>Price</th>
        <th>action</th>
      </tr>
      <tr v-for="c in cart" v-bind:key="c._id">
        <td>{{c.description}}</td>
        <td v-bind="c.count">{{c.count}}</td>
        <td>{{c.count*c.value}}</td>
        <td>
          <button class="ibtn" :id="'citBt-'+c._id" v-on:click="removeItem">remove</button>
        </td>
      </tr>
      <tr>
        <td>TOTAL</td>
        <td></td>
        <td v-bind="total">{{total}}</td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <button class="ibtn" v-on:click="cartCheckout">CHECKOUT</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
const axios = require("axios");

async function sumCart(){
  const response = await axios.get("/api/cart");
  let sum = 0;
  alert(JSON.stringify( response.data))
  response.data.forEach(c => {
    sum+=c.price;
  });
  return sum
}

export default {
  name: "cart",
  data: function() {
    return {
      cart: [],
      total:0
    };
  },
  async mounted() {
    const resp = await axios.get("/api/cart");
    if (resp.status === 200) {
      this.cart = resp.data;
      let sum=0;
      this.cart.forEach(c => {
        sum+=c.value;
      });
      this.total= sum;
    }
  },
  computed: {
    /*
    carts() {
      //return users cart
      /*
      let userid = this.$store.state.person._id;
      let userCart = [];
      this.$store.state.carts.forEach(item => {
        if (item.owner === userid) userCart.push(item);
      });
      return this.cart;
    },*/
    cartTotal(){
      return sumCart();
    }
  },
  methods: {
    removeItem: function(event) {
      let attr = event.target.getAttribute("id");
      let index = attr.indexOf("-");
      let id = parseInt(attr.substr(index + 1, attr.length - index - 1));

      let carts = this.$store.state.carts;
      let prodId = -1;
      for (let i = 0; i < carts.length; i++) {
        if (carts[i]._id === id) {
          prodId = carts[i].product;
          carts[i].count--;
          if (carts[i].count <= 0) carts.splice(i, 1);
        }
      }
      //get product back to stock
      for (let i = 0; i < this.$store.state.products.length; i++) {
        if (this.$store.state.products[i]._id === prodId) {
          this.$store.state.products[i].stock++;
        }
      }
    },
    cartCheckout: function() {
      let userid = this.$store.state.person._id;
      let sum = 0;
      this.$store.state.carts.forEach(item => {
        if (item.owner === userid) sum += item.count * item.value;
      });
      this.$store.state.finances.push({
        _id: this.$store.state.finances.length + 1,
        customer: userid,
        type: "product",
        date: new Date(),
        value: sum
      });
      for (let i = 0; i < this.$store.state.carts.length; i++) {
        if (this.$store.state.carts[i].owner === userid)
          this.$store.state.carts.splice(i, 1);
      }
      alert("Well done! All products was paid!");
    }
  }
};
</script>
<style>
#cart {
  margin: auto;
  width: 70%;
  margin: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  box-shadow: 0px 0px 35px -16px rgba(0, 0, 0, 0.75);
  padding: 30px;
  width: 450px;
  height: 100%;
  background-color: rgb(109, 109, 109);
  display: inline-block;
}
#cart_table {
  width: 100%;
}
a {
  color: black;
}
</style>