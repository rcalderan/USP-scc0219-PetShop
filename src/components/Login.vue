<!--
    3672382 - Richard Carvalho Calderan
    958350- Jonatan Ricardo Catai

-->
<template>
  <div id="login">
    <div v-if="newAccount">
      <h2>Create your account</h2>
      <label>Name</label>
      <input v-model="name" placeholder="Your Name" type="text" />
      <label>Phone</label>
      <input v-model="phone" placeholder="Your phone" type="text" />

      <label>Email</label>
      <input v-model="email" placeholder="e-mail" type="text" />
      <label>Password</label>
      <input v-model="password" placeholder="password" type="text" />

      <input v-on:click="register" type="submit" value="Register now!" />
    </div>
    <div v-else>
      <div class="content-a">
        <form>
          <div class="imgcontainer">
            <img src="../assets/img_avatar2.png" alt="Avatar" class="avatar" />
          </div>

          <div class="container">
            <label>
              <b>Email</b>
            </label>
            <input v-model="email" type="text" placeholder="Enter your email" name="uname" />

            <label>
              <b>Password</b>
            </label>
            <input v-model="password" type="password" placeholder="Enter Password" name="psw" />

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
        <button v-on:click="createAccount" class="lg-btn">Create an account</button>
      </div>
    </div>
  </div>
</template>

<script>
/*let axios=require('axios')
async function save(url, item){
  const response = await axios.post(url,item);
  alert(response.status)

}*/
export default {
  data: function() {
    return {
      email: "",
      password: "",
      name: "",
      phone: "",
      adress:'',
      //photo,
      newAccount: false
    };
  },
  name: "login",
  methods: {
    login() {
      let found = false;
      this.$store.state.persons.forEach(p => {
        if (p.password === this.password && p.email === this.email) {
          found = true;
          this.$store.state.person = p;
          localStorage.uid = p._id;
        }
      });
      if (!found) alert("User not found");
      else this.$router.push("/");
    },
    createAccount() {
      this.$data.newAccount = true;
    },
    async register() {
      let all = this.$store.state.persons;
      let invalid = false;
      all.forEach(user => {
        if (user.name === this.name || user.email === this.email) {
          alert("This user is already registred!");
          invalid = true;
          return;
        }
      });
      if (!invalid) {
        let newUser = {
          type: "customer",
          name: this.name,
          phone: this.phone,
          email: this.email,
          password: this.password
        };
        const response = await this.$http.request().post("/api/person/", newUser);
        if(response.status===200){

          newUser._id = response.data._id
          all.push(newUser);
          this.$store.state.person = newUser;
          localStorage.uid = newUser._id;
          this.$router.push("/");
          
          alert("Thank you for your registration");
        }else{
          alert('Couldnt save')
        }
      }
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
#login form {
  border: 3px solid #f1f1f1;
}

#login input {
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