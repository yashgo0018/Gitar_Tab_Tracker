<template>
  <div>
    <div class="row">
      <h2 class="orange-text text-lighten-1 center-align">Sign In</h2>
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input id="username" v-model="username" type="text" class="validate">
            <label for="username">Username</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="password" type="password" v-model="password" class="validate">
            <label for="password">Password</label>
          </div>
        </div>
        <button class="btn waves-effect orange btn-large center-align" @click="loginformSubmit">
          Sign In
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
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      error: ""
    };
  },
  methods: {
    async loginformSubmit(e) {
      e.preventDefault();
      try {
        const response = await AuthenticationService.login({
          email: this.username,
          password: this.password
        });
        console.log(response);
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        this.error = "";
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

