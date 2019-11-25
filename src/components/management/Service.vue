<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai

-->
<template>
  <div id="service">
    <h2>Service Management</h2>
    <label>Services</label>
    <select v-model="name" v-on:change="setService" class="allServices" name="allServices">
      <option v-for="s in services" v-bind:key="s._id">{{s.name}}</option>
    </select>

    <label for="sname">Name</label>
    <input v-model="name" placeholder="Service Name" type="text" />

    <label for="sname">Description</label>
    <input v-model="description" placeholder="Set service description" type="text" />

    <label>Price</label>
    <input v-model="price" placeholder="Service Price" type="text" />
    <input v-on:click="addService" type="submit" value="Add/Edit service" />
    <input v-on:click="removeService" type="submit" value="Remove service" />
  </div>
</template>

<script>
export default {
  name: "service",
  data: function() {
    return {
      name: "",
      description: "",
      photo: "",
      price: 0
    };
  },
  computed: {
    services() {
      return this.$store.state.services;
    }
  },
  methods: {
    setService: function() {
      this.$store.state.services.forEach(s => {
        if (s.name === this.name) {
          this.price = s.price;
          this.description = s.description;
          this.name = s.name;
        }
      });
    },

    addService: async function() {
      //checka se existe
      let all = this.$store.state.services;
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
      all.forEach(async serv => {
        if (serv.name === this.name) {
          same = true; //evitar duplicar caso put falhe
          serv.description = this.description;
          serv.price = this.price;

          const putResp = await this.$http
            .request()
            .put("/api/service/" + serv._id, serv);
          if (putResp.status === 200) {
            updated = true;
            alert(`Service updated!`);
          } else {
            alert("Couldnt update");
          }
        }
      });
      //senão adiciona novo
      if (!updated && !same) {
        let newService = {
          name: this.name,
          description: this.description,
          price: this.price
        };
        const postResp = await this.$http
          .request()
          .post("/api/service/", newService);
        if (postResp.status === 200) {
          newService._id = postResp.data._id;
          await this.$store.dispatch("updateServices");
          alert(`Service ${newService.name} added!`);
        } else {
          alert("não pode inserir");
        }
      }
    },
    removeService: async function() {
      let all = this.$store.state.services;
      if (this.name === "") {
        alert("Insert a name");
        return;
      }
      for (let i = 0; i < all.length; i++) {
        if (all[i].name === this.name) {
          const response = await this.$http.request().delete("/api/service/" + all[i]._id);
        if (response.status != 200) {
          alert("coundt remove");
        }
        else{
          await this.$store.dispatch('updateServices')
          alert('Service removed!')
        }
        }
      }
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