<template>
  <div>
    <div class="row">
      <h2 class="red-text text-lighten-1 center-align">Register with Us</h2>
      <form class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <input id="first_name" type="text" v-model="fname" class="validate">
            <label for="first_name">First Name</label>
          </div>
          <div class="input-field col s6">
            <input id="last_name" v-model="lname" type="text" class="validate">
            <label for="last_name">Last Name</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input id="email" type="email" v-model="email" class="validate">
            <label for="email">Email</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input id="username" v-model="username" type="text" class="validate">
            <label for="username">Username</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input id="password" type="password" v-model="password" class="validate">
            <label for="password">Password</label>
          </div>
          <div class="input-field col s6">
            <input id="password2" v-model="password2" type="password" class="validate">
            <label for="password2">Confirm Password</label>
          </div>
        </div>
        <button class="btn waves-effect red btn-large center-align" @click="formSubmit">
          Register
          <i class="material-icons right">send</i>
        </button>
      </form>
      <div v-html="error"/>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "register",
  data() {
    return {
      fname: "",
      lname: "",
      email: "",
      username: "",
      password: "",
      password2: "",
      error: ""
    };
  },
  methods: {
    async formSubmit(e) {
      e.preventDefault();
      if (this.password === this.password2) {
        try {
          console.log(
            await AuthenticationService.register({
              fname: this.fname,
              lname: this.lname,
              email: this.email,
              username: this.username,
              password: this.password
            })
          );
          this.error = "";
          this.$router.push("/");
        } catch (error) {
          this.error = error.response.data.error;
        }
      }
    }
  }
};
</script>

