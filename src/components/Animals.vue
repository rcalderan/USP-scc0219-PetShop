<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai

-->
<template>
  <div id="animals">
    <!--customer animals controler-->
    <div v-if="person.type==='customer'">
      <h2>My animals</h2>
      <table id="customers">
        <tr>
          <th>Animal name</th>
          <th>Breed</th>
          <th>Race</th>
          <th>Birth</th>
          <th>Action</th>
        </tr>
        <tr v-for="a in animals" v-bind:key="a._id">
          <td :id="'an-'+a._id">{{a.name}}</td>
          <td :id="'at-'+a._id">{{a.type}}</td>
          <td :id="'ar-'+a._id">{{a.race}}</td>
          <td :id="'ab-'+a._id">{{a.age}}</td>
          <td>
            <button :id="'abe-'+a._id" @click="editAnimal" class="ibtn">edit</button>
            <button :id="'abr-'+a._id" v-on:click="removeAnimal" class="ibtn">remove</button>
          </td>
        </tr>
      </table>
      <h2>Add or edit animal</h2>
      <label>Pet name</label>
      <input
        v-model="animalInput"
        type="text"
        id="fname"
        name="animalName"
        placeholder="Pet's Name"
      />

      <label>Breed</label>
      <select v-bind="animalType" id="fbreed" name="breed">
        <option value="dog">dog</option>
        <option value="cat">cat</option>
        <option value="mouse">mouse</option>
        <option value="horse">horse</option>
        <option value="fish">fish</option>
        <option value="other">other</option>
      </select>
      <label>Pet's race</label>
      <input
        type="text"
        id="frace"
        name="animalRace"
        placeholder="Pet's race"
      />
      <label>Age</label>
      <input
          id="fage"
          type="text"
          name="animalAge"
        />
      <button id="fbtn" v-on:click="addAnimal">Add animal</button>
    </div>
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
        <input type="text" />

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
      let attr = event.target.getAttribute("id");
      let index = attr.indexOf("-");
      let id = attr.substr(index + 1, attr.length - index - 1);
      let aname = document.getElementById("an-" + id).innerHTML;
      let abreed = document.getElementById("at-" + id).innerHTML;
      let arace = document.getElementById("ar-" + id).innerHTML;
      let age = document.getElementById("ab-" + id).innerHTML;
      document.getElementById("fname").value = aname;
      document.getElementById("fbreed").value = abreed;
      document.getElementById("frace").value = arace;
      document.getElementById("fage").value = age;
    },
    removeAnimal: function(event) {
      let attr = event.target.getAttribute("id");
      let index = attr.indexOf("-");
      let id = attr.substr(index + 1, attr.length - index - 1);
      let aname = document.getElementById("an-" + id);
      let ani = this.$store.state.animals
      for (let i = 0; i < ani.length; i++) {
        if (ani[i].name === aname.innerHTML) ani.splice(i, 1);
      }
    },
    addAnimal: function() {
      let aname = document.getElementById("fname").value;
      let breed = document.getElementById("fbreed").value;
      let race = document.getElementById("frace").value;
      let age = document.getElementById("fage").value;
      if(aname==="")return;
      try {
        //verifica se o animal existe, se existir atualize-o, se não, adicione  
        let userId= this.$store.state.person._id;
        let updated=false;
        this.$store.state.animals.forEach(an => {
          if(an.owner===userId && an.name===aname){
            an.name = aname;
            an.race = race;
            an.type=breed;
            an.age = age;
            updated=true;
          }
        });
        if (updated) return;
        let ani = this.$store.state.animals;
        let len = ani.length;
        ani.push({
          _id: len + 1,
          owner: this.$store.state.person._id,
          type: breed,
          race: race,
          name: aname,
          photo: "imgsrc",
          age: age
        });
      } catch {
        alert("error");
      }
    }
  }
};
</script>

<style>
#animals {
  margin: auto;
  width: 70%;
  margin: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  box-shadow: 0px 0px 35px -16px rgba(0, 0, 0, 0.75);
  padding: 30px;
  width: 40%;
  height: 100%;
  background-color: rgb(161, 189, 148);
  display: inline-block;
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
select,input[type="date"]{
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.ibtn{
  
  width: 100%;
  height: 92%;
  background-color: #4caf50;
  color: white;
  padding-bottom: 4%;
  padding-top: 4%;

}

#fbtn {
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