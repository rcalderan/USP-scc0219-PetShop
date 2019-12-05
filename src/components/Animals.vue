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
          <th>Age(months)</th>
          <th>Action</th>
        </tr>
        <tr v-for="a in animals" v-bind:key="a._id">
          <td>{{a.name}}</td>
          <td>{{a.type}}</td>
          <td>{{a.race}}</td>
          <td>{{a.age}}</td>
          <td>
            <button @click="editAnimal(a._id)" class="ibtn">edit</button>
            <button v-on:click="removeAnimal(a._id)" class="ibtn">remove</button>
          </td>
        </tr>
      </table>
      <h2>Add or edit animal</h2>
      <label>Pet name</label>
      <input v-model="name" type="text" placeholder="Pet's Name" />

      <label>Breed</label>
      <select v-model="breed">
        <option value="dog">dog</option>
        <option value="cat">cat</option>
        <option value="mouse">mouse</option>
        <option value="horse">horse</option>
        <option value="fish">fish</option>
        <option value="other">other</option>
      </select>
      <!--
      <label>Pet's image</label>
      <input type="file" @change="onFileUpload" />-->
      <label>Pet's race</label>
      <input v-model="race" placeholder="Pet's race" />
      <label>Age</label>
      <input type="number" v-model="age" />
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
  data: function() {
    return {
      name: "",
      breed: "",
      race: "",
      age: 0,
      petImage:null
    };
  },
  mounted() {
    this.$store.state.animals.forEach(a => {
      if (a.owner === this.$store.state.person._id) {
        //this.name =a.name;
      }
    });
  },
  computed: {
    person() {
      return this.$store.state.person;
    },
    animals() {
      let userAnimals = [];
      this.$store.state.animals.forEach(a => {
        if (a.owner === this.$store.state.person._id) {
          userAnimals.push(a);
        }
      });
      return userAnimals;
    }
  },
  methods: {
    onFileUpload: function(event){
      this.petImage= event.target.files[0];
    },
    //edit animal
    editAnimal: async function(id) {
      const resp = await this.$http.request().get("/api/animal/" + id);
      if (resp.status === 200) {
        this.name = resp.data.name;
        this.breed = resp.data.type;
        this.race = resp.data.race;
        this.age = resp.data.age;
        const image = await this.$http.request().get('/api/image/'+resp.data.photo)
        if(image.status===200) this.petImage = image.data
      }
    },
    //delete animal...
    removeAnimal: async function(id) {
      
        const response = await this.$http.request().delete("/api/animal/" + id);
        if (response.status != 200) {
          alert("coundt remove");
        }
        await this.$store.dispatch('updateAnimals')
    },
    //add animal
    addAnimal: async function() {
      try {
        //verifica se o animal existe, se existir atualize-o, se não, adicione
        /*if(this.petImage===null){
          alert('Select your pet\'s photo')
          return;
        }*/
        let userId = this.$store.state.person._id;
        let animal = null
        this.$store.state.animals.forEach(async (an) => {
          if (an.owner === userId && an.name === this.name) {
            animal = an
            animal.name = this.name
            animal.type=this.breed
            animal.race = this.race
            animal.age =this.age
            const response = await this.$http
            .request()
            .put("/api/animal/" + animal._id, animal);
            if (response.status === 200) {
              alert("Animal updated!");
            }else alert('n updatô')
          }
        });
        if (animal!=null) return;
        //create
        let newAnimal ={
          owner: this.$store.state.person._id,
          name: this.name,
          type: this.breed,
          race: this.race,
          age: this.age
        }
        /*
        const formData = new FormData()
        formData.append('image', this.petImage)
        const postImage = await this.$http.request().post("/api/image/", formData)
        if(postImage.status===200){
          alert('file uploaded...')
        }else{
          alert('couldnt upload')
        }*/
        const postResp = await this.$http.request().post("/api/animal/", newAnimal)
        if(postResp.status===200){
          newAnimal._id = postResp.data._id
          this.$store.state.animals =await this.$store.dispatch("updateAnimals");
          alert(`Animal ${newAnimal.name} added!`)
        }else{
          alert('não pode inserir')
        }
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
select,
input[type="date"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.ibtn {
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