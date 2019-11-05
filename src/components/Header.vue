<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai



-->
<template>
  <div id="header">
    <div id="logo">
      <img class="img-fluid" src="../assets/petsmart-logo.png" alt="logo"/>
      <h3>The best for your pet</h3>
    </div>
    <div id="header-content">
      <div id="header-search">
        <form>
          <input class="searchBar" type="text" placeholder="search" />
        </form>
      </div>
      <div id="header-login">
        <form action="login.html">
          <input type="submit" value="Login" title="login" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#header{
    position: relative;
    margin: auto;
    width: 100%;
    height: 100px;
}

.banner{
  width: 100%;
}
#logo{
    text-align: center;
    position: absolute;
    left: 0;
    width: 30%;
    height: 100px;
}
#header-content{
    position: absolute;
    right: 0;
    width: 70%;
    height: 100%;
}


#header-search{
  position: relative;
  float: left;
  width: 60%;
}
.searchBar{
  margin: 30px 0;
  height: 32px;
  line-height: 25px;
  border: 1px solid darkolivegreen;
  width: 100%;
}

#header-login{
  position: relative;
  float: right;
  padding-bottom: 0;
  width: 40%;
}
#header-login input{
  float: right;
  margin-bottom: 1px;
  width: 50%;
}



</style>