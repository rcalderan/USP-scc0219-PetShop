<template>
  <div id="nav">
    <ul>
      <li class="active" v-on:click="choose('home')">
        Home
      </li>
      <li v-on:click="choose('service')">
        Services
      </li>
      <li v-on:click="choose('shop')">
        Shop
      </li>
      <li v-on:click="choose('contact')">
        Contact
      </li>
      <li v-on:click="choose('about')" style="float:right">
        About
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    methods:{
        choose: (message) =>{
          switch(message){
            case 'service':
            break;
            case 'shop':
            
            break;
            case 'contact':
            
            break;
            case 'about':
            
            break;
            default://home
            
            break;
          }
        }
    }
};
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
  border-right: 1px solid #bbb;
  
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
li:hover{
    cursor:pointer;
}

li:last-child {
  border-right: none;
}

li:hover:not(.active) {
  background-color: #111;
}

.active {
  background-color: #4caf50;
}
</style>