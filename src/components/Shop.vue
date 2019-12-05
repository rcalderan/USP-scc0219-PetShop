<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai

-->
<template>
  <div id="shop">
    <div class="shop-content">
      <h1>PetSmart Shop</h1>
      <div class="shop-item" v-for="p in products" v-bind:key="p._id">
        <div class="item-tittle">{{p.name}}</div>
        <img :src="require(`@/assets/grooming.png`)" alt="">
        <!--<img @click="test" v-bind:alt="p.name" v-attr="`src: ${p.photo}`" />-->
        <!--<img @click="test" v-bind:alt="p.name" v-bind:src="require(''+p.photo)" />-->
        <div class="item-value">${{p.price}}</div>
        <div class="item-description">
          <p>{{p.description}}</p>
        </div>
        <div class="item-control">
          <span>{{p.stock}} in stock</span>
          <button v-on:click="addToCart(p._id)">add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>



export default {
  name: "shop",
  data: function() {
    return {
      //products: []
    };
  },
  
  async mounted() {
    await this.$store.dispatch("updateProducts");
  },
  computed: {
    person() {
      return this.$store.state.person;
    },
    products() {
      return this.$store.state.products;
    }
  },
  watch: {
    /*
    products: function(all) {
      alert(all);
      this.products = all;
    }*/
  },
  methods: {
    addToCart: async function(productId) {
      //redirect to login page if not connecteD
      let userid = this.$store.state.person._id;
      if (!this.$store.state.person._id) {
        this.$router.push("/login");
        return;
      }
      //add item to user's cart

      //must check for produt in stock
      let product = null;
      this.$store.state.products.forEach(p => {
        if (p._id === productId) {
          if (p.stock > 0) product = p;
        }
      });
      if (product === null) {
        alert("Out of stock!");
        return;
      }

      //SEEK for iten in user's cart
      let foundCart = {};
      this.$store.state.carts.forEach(c => {
        if (c.owner === userid && c.product == productId) {
          foundCart = c;
        }
      });
      //add if not found
      let addedToCart=false
      if (!foundCart._id) {
        const newCart = {
          owner: userid,
          product: product._id,
          description: product.name,
          value: product.price
        };

        const postResp = await this.$http.request().post("/api/cart/", newCart)
        if(postResp.status===200){
          newCart._id = postResp.data._id
          addedToCart=true
          this.$store.state.carts =await this.$store.dispatch("updateCarts");
          alert(`Producte ${product.name} added to cart!`)
        }else{
          alert('não pode inserir')
        }
      }else{
        foundCart.count++;
        const putResp = await this.$http.request().put("/api/cart/"+foundCart._id, foundCart)
        if(putResp.status===200){
          addedToCart=true
          alert(`Mais um Produto inserido no carrinho. Total:${foundCart.count}`)
        }else{
          alert('não pode atualizar no carrinho')
        }
      }
      await this.$store.dispatch('updateCarts')
      //
      if(addedToCart){//remover do estoque, mas somente se comprar. corrigir isso
        product.stock--;
        
        const prodResp = await this.$http.request().put("/api/product/"+product._id, product)
        if(prodResp.status===200){
          await this.$store.dispatch('updateProducts')
        }

      }
    },
    getImgUrl: function() {
      return require('@/assets/grooming.png');
    },
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
.shop-content {
  position: relative;
  width: 100%;
}
.shop-content h1 {
  color: #4caf50;
}
.item-tittle {
  font-size: 18px;
}
.shop-item {
  position: relative;
  display: inline-block;
  width: 250px;
  height: 100%;
  border: 1px solid #111;
  margin: 10px 0 0 30px;
}
.shop-item:hover {
  border: 1px solid #4caf50;
}
.item-control {
  margin-bottom: 0;
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