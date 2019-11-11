<template>
  <div id="login">
    <div class="content-a">
      <form>
        <div class="imgcontainer">
          <img src="../assets/img_avatar2.png" alt="Avatar" class="avatar" />
        </div>

        <div class="container">
          <label>
            <b>Email</b>
          </label>
          <input type="text" placeholder="Enter your email" name="uname" />

          <label>
            <b>Password</b>
          </label>
          <input type="password" placeholder="Enter Password" name="psw" />

          <button v-on:click="login" type="submit" class="lg-btn">Login</button>
        </div>

        <div class="login-container" style="background-color:#f1f1f1">
          <!--<router-link to="/">
            <button class="cancelbtn">Cancel</button>
          </router-link>-->
        </div>
      </form>
    </div>
    <div class="content-b">
      <h1>new customer or signed up in store?</h1>
      <p>Create an account now to start earning points on all in-store & online purchases & to complete booking your pet’s services. Signed up in store? Be sure to use the same email address to create your account.</p>
      <button class="lg-btn">Create an account</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  computed: {
    persons() {
      return this.$store.state.persons;
    }
  },
  methods: {
    login() {
      let email = document.getElementsByName("uname")[0].value;
      let pass = document.getElementsByName("psw")[0].value;
      let found = false;
      this.$store.state.persons.forEach(p => {
        if (p.password === pass && p.email === email) {
          found = true;
          this.$store.state.person = p;
        }
      });
      if (!found) alert("User not found")
      else
      this.$router.push('/')
    }
  }
};
</script>

<style>
#login {
  margin: auto;
  text-align: center;
  height: 100%;
  width: 50%;
}
form {
  border: 3px solid #f1f1f1;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.lg-btn {
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

.lg-btn:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.login-container {
  padding: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn {
    width: 100%;
  }
}
</style>