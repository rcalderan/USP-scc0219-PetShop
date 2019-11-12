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
        <img v-bind:alt="p.name" v-bind:src="p.photo" />
        <div class="item-value">${{p.price}}</div>
        <div class="item-description">
          <p>{{p.description}}</p>
        </div>
        <button :id="'buyBtn-'+p._id" v-on:click="addToCart">add to cart</button>
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
  methods:{
    addToCart: function(){      
      //redirect to login page if not connecteD
      let userid=this.$store.state.person._id;
      if(!this.$store.state.person._id){
        this.$router.push('/login')
        return;
      }
      //add item to user's cart   
      let attr = event.target.getAttribute("id");
      let index = attr.indexOf("-");
      let id = parseInt(attr.substr(index + 1, attr.length - index - 1));
      
      //must check for produt in stock
      let product=null;
      this.$store.state.products.forEach(p => {
        if(p._id===id){
          if(p.stock>0)
            product=p;
        }
      });
      if(product===null){
        alert('Out of stock!')
        return;
      }


      //SEEK for iten in users cart
      let found=false;
      this.$store.state.carts.forEach(c => {
        if(c.owner===userid && c._id==id){
          found=true;
          c.count++;
        }
      });
      //add if not found
      if(!found){
        this.$store.state.carts.push(
          { _id: this.$store.state.carts.length+1, owner: userid, description: product.name,count:1, value: product.price })
      }
      //
      product.stock--;
    }
  }
};
</script>

<style>
*{
  box-sizing: border-box;
}
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
  height: 320px;
  border: 1px solid #111;
  float: left;
  margin: 10px 0 0 30px;
}
.shop-item:hover {
  border: 1px solid #4caf50;
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