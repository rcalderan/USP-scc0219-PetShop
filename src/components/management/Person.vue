<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai

-->
<template>
  <div id="person">
      
      <h2>Person Management</h2>
      <label>Persons</label>
      <select id="pperson" v-on:change="setPerson">
        <option v-for="p in persons" v-bind:key="p._id" value>{{p.name}}</option>
      </select>
      <label>Type</label>
      <select id="ptype">
        <option>admin</option>
        <option>customer</option>
      </select>
      <label>Name</label>
      <input id="pname" placeholder="Person's Name" type="text" />
      <label>Phone</label>
      <input id="pphone" placeholder="Person's phone" type="text" />

      <label>Email</label>
      <input id="pemail" placeholder="Set person's email" type="text" />
      <label>Password</label>
      <input id="ppass" placeholder="Person's password" type="text" />

      <input v-on:click="addPerson" type="submit" value="Add/Edit person" />
      <input v-on:click="removePerson" type="submit" value="Remove person" />
 
  </div>
</template>

<script>
export default {
  //
  //
  name: "person",
  computed: {
    persons() {
      return this.$store.state.persons;
    }
  },
  methods: {
    setPerson: function(event) {
      let name = "";
      let attr = event.target.getAttribute("id");
      let allServ = document.getElementById(attr);
      name = allServ.options[allServ.selectedIndex].innerHTML;
      let done = false;
      this.$store.state.persons.forEach(s => {
        if (s.name === name) {
          document.getElementById("pname").value = name;
          //document.getElementById("ptype").value = s.type;
          document.getElementById("pphone").value = s.phone;
          document.getElementById("pemail").value = s.email;
          document.getElementById("ppass").value = s.password;
          done = true;
        }
      });
      if (!done) {
        document.getElementById("pname").value = "";
        //document.getElementById("ptype").value = "";
        document.getElementById("pphone").value = "";
        document.getElementById("pemail").value = "";
        document.getElementById("ppass").value = "";
      }
    },
    addPerson: function() {
      //checka se existe
      let sname = document.getElementById("pname").value;
      let pemail = document.getElementById("pemail").value;
      let pphone = document.getElementById("pphone").value;
      let ppass = document.getElementById("ppass").value;
      let all = this.$store.state.persons;
      if (sname === "") {
        alert("Insert a name");
        return;
      }
      let updated = false;
      all.forEach(p => {
        if (p.name === sname) {
          p.description = pemail;
          p.price = pphone;
          updated = true;
          alert("Person updated!");
        }
      });
      //senão adiciona novo
      if (!updated) {
        all.push({
          _id: all.length + 1,
          type: "admin",
          name: sname,
          photo: "",
          phone: pphone,
          email: pemail,
          password: ppass
        });
        alert("New person inserted!");
      }
    },
    removePerson: function() {
        let userId= this.$store.state.person._id;
      let sname = document.getElementById("pname").value;
      let all = this.$store.state.persons;
      if (sname === "") {
        alert("Insert a name");
        return;
      }
      let done = false;
      for (let i = 0; i < all.length; i++) {
        if (all[i].name === sname) {
            if(userId===all[i]._id){
                alert('U cant remove yourself');
                return;
            }
          all.splice(i, 1);
          done = true;
          alert("Person deleted!");
        }
      }
      if (!done) alert("Person not found!");
    }
  }
};
</script>

<style>
#person{
    background-color: #ffa366;
}
#person input, #person select{
    text-align: center;
    background-color:#ffe0cc;
}
</style>