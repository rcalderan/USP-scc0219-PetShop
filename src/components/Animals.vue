/* eslint-disable vue/valid-v-on */
<template>
  <div id="animals">
    <!--customer animals controler-->
    <div v-if="person.type==='customer'">
      <h2>My animals</h2>
      <table id="customers">
        <tr>
          <th>Animal name</th>
          <th>Situation</th>
          <th>Action</th>
        </tr>
        <tr v-for="a in animals" v-bind:key="a._id">
          <td>{{a.name}}</td>
          <td>in Home</td>
          <td>
            <button @click="editAnimal">edit</button>
            <button v-on:click="removeAnimal">remove</button>
          </td>
        </tr>
      </table>
      <h2>Add or edit animal</h2>
      <label for="aname">Pet name</label>
      <input
        v-model="animalInput"
        type="text"
        id="fname"
        name="animalName"
        placeholder="Pet's Name"
      />

      <label>Breed</label>
      <select v-bind="animalType" id="breed" name="breed">
        <option value="dog">dog</option>
        <option value="cat">cat</option>
        <option value="mouse">mouse</option>
        <option value="horse">horse</option>
        <option value="fish">fish</option>
        <option value="other">other</option>
      </select>

      <button v-on:click="addAnimal">Add animal</button>
    </div>
    <!--Admin animals controler-->
    <div v-else>
      <h2>Animals</h2>
      <table id="adminAnimals">
        <tr>
          <th>Animal name</th>
          <th>Situation</th>
          <th>Action</th>
        </tr>
        <tr v-for="a in animals" v-bind:key="a._id">
          <td>{{a.name}}</td>
          <td>in Home</td>
          <td>
            <button>edit</button>
            <button>remove</button>
          </td>
        </tr>
      </table>
      <h2>Add or edit animal</h2>
      <form>
        <label>Pet name</label>
        <input type="text"/>

        <label>Breed</label>
        <select id="breed" name="breed">
          <option value="dog">dog</option>
          <option value="cat">cat</option>
          <option value="mouse">mouse</option>
          <option value="horse">horse</option>
          <option value="fish">fish</option>
          <option value="other">other</option>
        </select>

        <input @click="addAnimal" value="Add new animal" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "animals",
  computed: {
    person() {
      return this.$store.state.person;
    },
    animals() {
      let userAnimals = [];
      this.$store.state.animals.forEach(element => {
        if (element.owner === this.$store.state.person._id)
          userAnimals.push(element);
      });
      return userAnimals;
    }
  },
  methods: {
    editAnimal: function(event) {
      /*
      for (var [key, value] of Object.entries(event.target)) {
        alert(key + " " + value);
      }*/
      //alert (event.target.innerHTML)
      this.$data.animalInput = event.target.innerHTML;
    },
    removeAnimal: function() {},
    addAnimal: function() {
      //let animalName = document.getElementById('a1').value;
      let aname = document.getElementById('fname').value;
      let breed = document.getElementById('breed').value;
      try{
        let ani =this.$store.state.animals;
        let len = ani.length;
        ani.push(
          { _id: len+1, 
          owner: this.$store.state.person._id, type: breed, race: "?", name: aname, photo: "imgsrc", age: new Date() },
        );

      }catch{
        alert('error');
      }
    }
  }
};
</script>

<style>
#animals {
  margin: 10px;
  box-shadow: 0px 0px 35px -16px rgba(0, 0, 0, 0.75);
  padding: 30px;
  width: 30%;
  height: 100%;
  background-color: rgb(161, 189, 148);
  float: left;
}
/*tables*/
table {
  width: 100%;
}
td {
  padding: 0;
  margin: 0;
}
th {
  background-color: #4caf50;
}
tr {
  background-color: #e5fce6;
}
tr:nth-child(even) {
  background-color: #aefcb1;
}

/*form*/
label {
  width: 100%;
  text-align: left;
}
input[type="text"],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"] {
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}
</style>