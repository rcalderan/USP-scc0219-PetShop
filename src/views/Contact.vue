<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai
-->
<template>
  <div class="contact">
    <Nav />
    <a href="shop.html">
      <img class="banner" src="../assets/shopLocal.jpg" />
    </a>
    <h2>Contact us!</h2>
    <p>Just contact our phisical store</p>

    <table id="stores">
      <tr>
        <th>Store</th>
        <th>Contact</th>
        <th>phone</th>
      </tr>
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>55 15 2343-2344</td>
      </tr>
      <tr>
        <td>Berglunds snabbköp</td>
        <td>Christina Berglund</td>
        <td>55 11 3455-4433</td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>55 11 3455-4433</td>
      </tr>
      <tr>
        <td>Ernst Handel</td>
        <td>Roland Mendel</td>
        <td>55 11 3455-4433</td>
      </tr>
      <tr>
        <td>Island Trading</td>
        <td>Helen Bennett</td>
        <td>55 11 3455-4433</td>
      </tr>
      <tr>
        <td>Königlich Essen</td>
        <td>Philip Cramer</td>
        <td>55 11 3455-5588</td>
      </tr>
      <tr>
        <td>Laughing Bacchus Winecellars</td>
        <td>Yoshi Tannamuri</td>
        <td>55 11 6899-1155</td>
      </tr>
      <tr>
        <td>Magazzini Alimentari Riuniti</td>
        <td>Giovanni Rovelli</td>
        <td>55 11 6899-1155</td>
      </tr>
      <tr>
        <td>North/South</td>
        <td>Simon Crowther</td>
        <td>55 11 6899-1155</td>
      </tr>
      <tr>
        <td>Paris spécialités</td>
        <td>Marie Bertrand</td>
        <td>55 11 6899-1155</td>
      </tr>
    </table>
  </div>
</template>

<script>
import Nav from "../components/Nav";

export default {
  name: "contact",
  components: {
    Nav
  }
};
</script>

<style>
#stores {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#stores td, #stores th {
  border: 1px solid #ddd;
  padding: 8px;
  margin-bottom: 10px;
}

#stores tr:nth-child(even){background-color: #e0ffe1;}

#stores tr:hover {background-color: #ddd;}

#stores th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: rgba(39, 39, 117, 0.856);
  color: white;
}
</style>
