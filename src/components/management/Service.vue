<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai

-->
<template>
  <div id="service">
    <h2>Service Management</h2>
    <label>Services</label>
    <select id="sservice" v-on:change="setService" class="allServices" name="allServices">
      <option v-for="s in services" v-bind:key="s._id" value>{{s.name}}</option>
    </select>

    <label for="sname">Name</label>
    <input id="sname" name="serviceName" placeholder="Service Name" type="text" />

    <label for="sname">Description</label>
    <input
      id="sdescription"
      name="serviceDescription"
      placeholder="Set service description"
      type="text"
    />

    <label for="sprice">Price</label>
    <input id="sprice" name="servicePrice" placeholder="Service Price" type="text" />
    <input v-on:click="addService" type="submit" value="Add/Edit service" />
    <input v-on:click="removeService" type="submit" value="Remove service" />
  </div>
</template>

<script>
export default {
  name: "service",
  computed: {
    services() {
      return this.$store.state.services;
    }
  },
  methods: {
    setService: function(event) {
      let name = "";
      let attr = event.target.getAttribute("id");
      let allServ = document.getElementById(attr);
      name = allServ.options[allServ.selectedIndex].innerHTML;
      let done = false;
      this.$store.state.services.forEach(s => {
        if (s.name === name) {
          document.getElementById("sname").value = name;
          document.getElementById("sdescription").value = s.description;
          document.getElementById("sprice").value = s.price;
          done = true;
        }
      });
      if (!done) {
        document.getElementById("sname").value = "";
        document.getElementById("sdescription").value = "";
        document.getElementById("sprice").value = "";
      }
    },

    addService: function() {
      //checka se existe
      let sname = document.getElementById("sname").value;
      let sdescrip = document.getElementById("sdescription").value;
      let sprice = document.getElementById("sprice").value;
      let all = this.$store.state.services;
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
          price: sprice
        });
        alert("New service inserted!");
      }
    },
    removeService: function() {
      let sname = document.getElementById("sname").value;
      let all = this.$store.state.services;
      if (sname === "") {
        alert("Insert a name");
        return;
      }
      let done = false;
      for (let i = 0; i < all.length; i++) {
        if (all[i].name === sname) {
          all.splice(i, 1);
          done = true;
          alert("Service deleted!");
        }
      }
      if (!done) alert("Service not found!");
    }
  }
};
</script>

<style>
#service {
  margin: auto;
  width: 70%;
  margin-top: 5px;
  margin-bottom: 5px;

  background-color: #3399ff;
}
#service input,
#service select {
  text-align: center;
  background-color: #cce6ff;
}
</style>