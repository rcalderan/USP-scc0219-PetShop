<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai

-->
<template>
  <div id="finance">
    <h2>Pet Shop Earnings</h2>
    <table>
      <tr>
        <th>ID</th>
        <th>customer</th>
        <th>type</th>
        <th>When</th>
        <th>Value</th>
      </tr>
      <tr v-for="f in finances" v-bind:key="f._id">
          <td>{{f._id}}</td>
          <td>{{getCust(f.customer).name}}</td>
          <td>{{f.type}}</td>
          <td>{{f.date}}</td>
          <td>{{f.value}}</td>
          </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td>TOTAL</td>
        <td>{{total}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "finance",
  const: {
    _id: 6,
    customer: 6,
    type: "service",
    date: new Date(2019, 8, 29, 15, 33),
    value: 150.0
  },
  computed:{
      finances(){
          return this.$store.state.finances;
      },
      total(){
          let sum=0;
          this.$store.state.finances.forEach(fin => {
              sum+=fin.value;
          });
          return sum;
      }

  },
  methods:{
      getCust:function(id){
          let allP= this.$store.state.persons;
          let found={}
          allP.forEach(p => {
              if(id===p._id)
                found=p;
          });
          return found;
      }
  }
};
</script>

<style>
#finance{
  
  margin: auto;
  width: 70%;
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>