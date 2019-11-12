<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai

-->
<template>
  <div id="product">
    <h2>Product Management</h2>
    <label>Products</label>
    <select id="pproducts" v-on:change="setProduct" class="allProducts" name="allProducts">
      <option v-for="p in products" v-bind:key="p._id" value>{{p.name}}</option>
    </select>

    <label for="pname">Name</label>
    <input id="pname" name="productName" placeholder="Product Name" type="text" />

    <label for="pdesc">Description</label>
    <input id="pdesc" name="productDescription" placeholder="Set product description" type="text" />

    <label for="pprice">in Stock</label>
    <input id="pstock" name="productStock" placeholder="Product stock" type="number" />
    <label for="pprice">Price</label>
    <input id="pprice" name="productPrice" placeholder="Product Price" type="text" />
    <input v-on:click="addProduct" type="submit" value="Add/Edit product" />
    <input v-on:click="removeProduct" type="submit" value="Remove product" />
  </div>
</template>

<script>
export default {
  name: "product",
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    setProduct: function(event) {
      let name = "";
      let attr = event.target.getAttribute("id");
      let allServ = document.getElementById(attr);
      name = allServ.options[allServ.selectedIndex].innerHTML;
      let done = false;
      this.$store.state.products.forEach(s => {
        if (s.name === name) {
          document.getElementById("pname").value = name;
          document.getElementById("pdesc").value = s.description;
          document.getElementById("pprice").value = s.price;

          document.getElementById("pstock").value = s.stock;
          done = true;
        }
      });
      if (!done) {
        document.getElementById("sname").value = "";
        document.getElementById("sdescription").value = "";
        document.getElementById("sprice").value = "";
        document.getElementById("pstock").value = 0;
      }
    },
    addProduct: function() {
      //checka se existe
      let sname = document.getElementById("pname").value;
      let sdescrip = document.getElementById("pdesc").value;
      let sprice = document.getElementById("pprice").value;
      let pstock = document.getElementById("pstock").value;
      let all = this.$store.state.products;
      alert(sname)
      if (sname === "") {
        alert("Insert a name");
        return;
      }
      sprice = parseFloat(sprice);
      if (isNaN(sprice)) {
        alert("Invalid Value");
        return;
      }
      let updated = false;
      all.forEach(serv => {
        if (serv.name === sname) {
          serv.description = sdescrip;
          serv.price = sprice;
          updated = true;
          alert("Service updated!");
        }
      });
      //senão adiciona novo
      if (!updated) {
        all.push({
          _id: all.length + 1,
          name: sname,
          description: sdescrip,
          photo: "path",
          price: sprice,
          stock: pstock,
          sold: 0
        });
        alert("New product inserted!");
      }
    },
    removeProduct: function() {
      let sname = document.getElementById("pname").value;
      let all = this.$store.state.products;
      if (sname === "") {
        alert("Insert a name");
        return;
      }
      let done = false;
      for (let i = 0; i < all.length; i++) {
        if (all[i].name === sname) {
          all.splice(i, 1);
          alert("Product deleted!");
          done = true;
        }
      }
      if (!done) alert("Product not found!");
    }
  }
};
</script>

<style>
#product {
  background-color: #258e25;
}
#product input,
#product select {
  text-align: center;
  background-color: #d6f5d6;
}
</style>