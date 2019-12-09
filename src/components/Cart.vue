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
        <th>unit</th>
        <th>Price</th>
        <th>action</th>
      </tr>
      <tr v-for="c in cart" v-bind:key="c._id">
        <td>{{c.description}}</td>
        <td>{{c.count}}</td>
        <td>{{c.value}}</td>
        <td>{{c.count*c.value}}</td>
        <td>
          <button class="ibtn" v-on:click="removeItem(c._id)">remove</button>
        </td>
      </tr>
      <tr>
        <td>TOTAL</td>
        <td></td>
        <td></td>
        <td >{{total}}</td>
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

function sum(cart) {
  let sum = 0;
  cart.forEach(c => {
    sum += c.count * c.value;
  });
  return sum;
}
export default {
  name: "cart",
  data: function() {
    return {
      cart: [],
      total: 0
    };
  },
  watch: {
    cart: function() {}
  },
  async mounted() {
    const resp = await this.$http.request().get("/api/cart");
    if (resp.status === 200) {
      let loadCart = [];
      resp.data.forEach(c => {
        if (this.$store.state.person._id === c.owner) loadCart.push(c);
      });
      this.cart = loadCart;
      this.total = sum(this.cart);
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
  },
  methods: {
    removeItem: async function(id) {
      try{

      let cart = {};
      this.cart.forEach(c => {
        if (c._id === id) cart = c;
      });

      let updateStockRequired = true;
      if (cart.count <= 1) {
        const response = await this.$http.request().delete("/api/cart/" + id);
        if (response.status != 200) {
          updateStockRequired = false;
          alert("coundt remove");
        }
      }else if(cart.product===0) {
        //neste caso é um serviço
          updateStockRequired = false;
      }
      else  {
        //must update cart count
        cart.count--;
        const response = await this.$http
          .request()
          .put("/api/cart/" + id, cart);
        if (response.status === 200) {
          alert("Product in cart updated!");
        } else {
          updateStockRequired = false;
        }
      }

      if (updateStockRequired) {
        //now retur to stock
        const productresp = await this.$http
          .request()
          .get("/api/product/" + cart.product);
        if (productresp.status === 200) {
          let product = productresp.data;
          product.stock++;

          const stockResp = await this.$http
            .request()
            .put("/api/product/" + cart.product, product);
          if (stockResp.status != 200) alert("couldnt update stock..");
        }
      }

      let usercart = await this.$store.dispatch("updateCarts");
      this.cart = usercart.filter((it)=>{
        return it.owner===this.$store.state.person._id
      })
      this.total = sum(this.cart);
      // alert(response.data.message);
      //await renderCart()
      /*let carts = this.$store.state.carts;
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
      }*/
      }catch(err){
        alert(err)
      }
    },
    cartCheckout:async function() {
      let userid = this.$store.state.person._id;
      let sum = 0,sumService=0;
      let toRemove=[]
      this.$store.state.carts.forEach((item) => {
        if (item.owner === userid) {
          toRemove.push(item._id)
          if(item.product===0){//deal with services              
            sumService += item.count * item.value;
          }else
            sum += item.count * item.value; 
        }
      });
      if(sum>0){
        let newFinance = 
        {customer:userid,type:"product",date:new Date(),value:sum}
        const resp = await this.$http
            .request()
            .post("/api/finance/", newFinance);
            if(resp.status!=200){
              alert('Couldnt add finance product')
            }
      }
      if(sumService>0){
        let newFinance = 
        {customer:userid,type:"service",date:new Date(),value:sumService}
        const resp = await this.$http
            .request()
            .post("/api/finance/", newFinance);
            if(resp.status!=200){
              alert('Couldnt add finance service')
            }
      }
      toRemove.forEach(async(cartId) => {
        const response = await this.$http.request().delete("/api/cart/" + cartId);
        if (response.status != 200) {
          alert("coundt remove");
        }
      });
      /*
      var newFinance = 
        {customer:6,type:"service",date:new Date(2019,8,29,15,33),value:150.0}
        let response = await axios.post(baseUrl,newFinance);
        assert.deepEqual(response.data.message,"New finance inserted.")
        if(response.data._id>0){
            lastId=response.data._id;
            
        }
      */
     let uC =await this.$store.dispatch("updateCarts");
     this.cart = uC.filter(u=>{
       return u.owner ===userid
     })
     this.total=0
     await this.$store.dispatch("updateFinances");

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