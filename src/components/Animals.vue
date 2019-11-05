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
        <tr>
          <td>Demony</td>
          <td>in Home</td>
          <td>
            <a href>edit</a>
            <br />
            <a href>remove</a>
          </td>
        </tr>
        <tr>
          <td>Fluffy</td>
          <td>on Grooming</td>
          <td>
            <a href>edit</a>
            <br />
            <a href>remove</a>
          </td>
        </tr>
      </table>
      <h2>Add or edit animal</h2>
      <form>
        <label for="aname">Pet name</label>
        <input type="text" id="fname" name="animalName" placeholder="Pet's Name" />

        <label for="breed">Breed</label>
        <select id="breed" name="breed">
          <option value="dog">dog</option>
          <option value="cat">cat</option>
          <option value="mouse">mouse</option>
          <option value="horse">horse</option>
          <option value="fish">fish</option>
          <option value="other">other</option>
        </select>

        <input type="submit" value="Add new annimal" />
      </form>
    </div>
    <!--Admin animals controler-->
    <div v-else><h2>Animals</h2>
      <table id="adminAnimals">
        <tr>
          <th>Animal name</th>
          <th>Situation</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>Demony</td>
          <td>in Home</td>
          <td>
            <a href>edit</a>
            <br />
            <a href>remove</a>
          </td>
        </tr>
        <tr>
          <td>Fluffy</td>
          <td>on Grooming</td>
          <td>
            <a href>edit</a>
            <br />
            <a href>remove</a>
          </td>
        </tr>
      </table>
      <h2>Add or edit animal</h2>
      <form>
        <label for="aname">Pet name</label>
        <input type="text" id="fname" name="animalName" placeholder="Pet's Name" />

        <label for="breed">Breed</label>
        <select id="breed" name="breed">
          <option value="dog">dog</option>
          <option value="cat">cat</option>
          <option value="mouse">mouse</option>
          <option value="horse">horse</option>
          <option value="fish">fish</option>
          <option value="other">other</option>
        </select>

        <input type="submit" value="Add new annimal" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "animals",
  data: () => {
    return {
      person: {
        isConnected: true,
        _id: 0,
        type: "admin",
        name: "Nina"
      }
    };
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