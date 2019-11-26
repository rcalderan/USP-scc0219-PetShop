<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai

-->
<template>
  <div id="person">
    <form>
    <h2>Person Management</h2>
    <label>Persons</label>
    <select v-model="email" v-on:change="setPerson">
      <option v-for="p in persons" v-bind:key="p._id">{{p.email}}</option>
    </select>
    <label>Type</label>
    <select v-model="type">
      <option>admin</option>
      <option>customer</option>
    </select>
    <label>Name</label>
    <input v-model="name" placeholder="Person's Name" type="text" />
    <label>Adress</label>
    <input v-model="adress" placeholder="Person's adress" type="text" />
    <label>Phone</label>
    <input v-model="phone" placeholder="Person's phone" type="text" />

    <label>Email</label>
    <input v-model="email" placeholder="Set person's email" type="text" autocomplete="username"/>
    <label>Password</label>
    <input v-model="password" placeholder="Person's password" type="password" autocomplete="current-password"/>

    <input v-on:click="addPerson" type="submit" value="Add/Edit person" />
    <input v-on:click="removePerson" type="submit" value="Remove person" />
    </form>
  </div>
</template>

<script>
export default {
  //
  //
  name: "person",
  data: function() {
    return {
      type: "",
      name: "",
      adress:'',
      email: "",
      password: "",
      phone: ""
    };
  },
  computed: {
    persons() {
      return this.$store.state.persons;
    }
  },
  methods: {
    setPerson: function() {
      this.$store.state.persons.forEach(s => {
        if (s.email === this.email) {
          this.name = s.name;
          this.type = s.type;
          this.adress = s.adress;
          this.phone = s.phone;
          this.email = s.email;
          this.password = s.password;
        }
      });
    },
    addPerson: async function() {
      let all = this.$store.state.persons;
      if (this.name === "") {
        alert("Insert a name");
        return;
      }
      if (this.adress === "") {
        alert("Please, set adress!");
        return;
      }
      //check if user exist
      let updated = false;
      let same=false;
      all.forEach(async(p) => {
        if (p.email === this.email) {
          same=true //usind this to prevent duplication if put request fails
          p.email = this.email
          p.name = this.name
          p.adress = this.adress
          p.password = this.password
          p.type = this.type
          p.phone = this.phone
          //request put
          const putResp = await this.$http.request().put("/api/person/"+p._id, p)
          if(putResp.status===200){
            updated=true
            alert('Usuario atualizado com sucesso')
          }else{
            alert('Não foi possível atualizar')
          }

        }
      })
      //senão adiciona novo
      if (!updated && !same) {
        let newUser ={
          type: this.type,
          name: this.name,
          adress: this.adress,
          photo: "pht",
          phone: this.phone,
          email: this.email,
          password: this.password
        }
        const postResp = await this.$http.request().post("/api/person/", newUser)
        if(postResp.status===200){
          newUser._id = postResp.data._id
          this.$store.state.carts =await this.$store.dispatch("updatePersons");
          alert(`User ${newUser.name} created!`)
        }else{
          alert('não pode inserir...')
        }
      }
    },
    removePerson: async function() {
      let all = this.$store.state.persons;
      if (this.name === "") {
        alert("Insert a name");
        return;
      }

      if (this.email === this.$store.state.person.email) {
        alert("U cant remove yourself");
        return;
      }
      let personId = -1;
      for (let i = 0; i < all.length; i++) {
        if (all[i].email === this.email) {
          personId = all[i]._id;
        }
      }
      //request delete person
      const response = await this.$http
        .request()
        .delete("/api/person/" + personId);
      if (response.status != 200) {
        alert("coundt remove");
      } else {
        await this.$store.dispatch("updatePersons");
        this.email = "";
        this.name = "";
        this.adress = "";
        this.type = "customer";
        this.password = "";
        this.phone=''
        alert('Person removed from  system')
      }
    }
  }
};
</script>

<style>
#person {
  margin: auto;
  width: 70%;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: #ffa366;
}

#person input,
#person input[password],
#person select {
  text-align: center;
  background-color: #ffe0cc;
}
</style>