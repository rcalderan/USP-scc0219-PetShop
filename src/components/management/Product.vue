<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai

-->
<template>
  <div id="product">
    <h2>Product Management</h2>
    <label>Sold</label>
    <p>{{sold}}</p>
    <label>Products</label>
    <select v-model="name" v-on:change="setProduct" class="allProducts">
      <option v-for="p in products" v-bind:key="p._id" >{{p.name}}</option>
    </select>

    <label>Name</label>
    <input v-model="name" placeholder="Product Name" type="text" />

    <label>Description</label>
    <input v-model="description" placeholder="Set product description" type="text" />

    <label>in Stock</label>
    <input v-model="stock" placeholder="Product stock" type="number" />
    
    <label>Price</label>
    <input v-model="price" placeholder="Product Price" type="text" />
    <input v-on:click="addProduct" type="submit" value="Add/Edit product" />
    <input v-on:click="removeProduct" type="submit" value="Remove product" />
  </div>
</template>

<script>
export default {
  name: "product",
  data:function(){
    return{
      name:'',
      description:'',
      stock:0,
      price:0,
      sold:0
    }
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    setProduct: function() {
      let allP = this.$store.state.products;
      alert(allP.length)
      allP.forEach(s => {
        if (s.name === this.name) {
          this.name = s.name
          this.description = s.description
          this.stock = s.stock
          this.price = s.price
          this.sold = s.sold
        }
      })
    },
    addProduct: async function() {
      //checka se existe
      let all = this.$store.state.products;
      if (this.name === "") {
        alert("Insert a name");
        return;
      }
      if (this.description === "") {
        alert("Insert a description");
        return;
      }
      let updated = false;
      let same = false;
      all.forEach(async p => {
        if (p.name === this.name) {
          same = true; //evitar duplicar caso put falhe
          p.description = this.description
          p.price = this.price
          p.stock = this.stock

          const putResp = await this.$http
            .request()
            .put("/api/product/" + p._id, p);
          if (putResp.status === 200) {
            updated = true;
            alert(`Product updated!`);
          } else {
            alert("Couldnt update");
          }
        }
      });
      //senão adiciona novo
      if (!updated && !same) {
        let newProduct = {
          name: this.name,
          description: this.description,
          price: this.price
        };
        const postResp = await this.$http
          .request()
          .post("/api/product/", newProduct);
        if (postResp.status === 200) {
          newProduct._id = postResp.data._id;
          await this.$store.dispatch("updateProducts");
          alert(`Product ${newProduct.name} added!`);
        } else {
          alert("não pode inserir");
        }
      }
    },

    removeService: async function() {
      let all = this.$store.state.products;
      if (this.name === "") {
        alert("Insert a name");
        return;
      }
      for (let i = 0; i < all.length; i++) {
        if (all[i].name === this.name) {
          const response = await this.$http.request().delete("/api/product/" + all[i]._id);
        if (response.status != 200) {
          alert("coundt remove");
        }
        else{
          await this.$store.dispatch('updateProducts')
          alert('Product removed!')
          this.name=''
          this.description=''
          this.price=0
          this.stock=0
          this.sold=0
        }
        }
      }
    }
  }
};
</script>

<style>
#product {
  margin: auto;
  width: 70%;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: #258e25;
}
#product input,
#product select {
  text-align: center;
  background-color: #d6f5d6;
}
</style>