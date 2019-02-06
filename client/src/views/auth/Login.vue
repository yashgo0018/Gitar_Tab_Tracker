<template>
  <fullpage>
    <div class="display-4 font-weight-thin orange--text text--lighten-1 text-xs-center">Sign In</div>
    <v-form>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs12>
            <v-text-field
              v-model="username"
              :rules="[rules.required, rules.min]"
              type="text"
              name="username"
              label="Username"
            ></v-text-field>
          </v-flex>
          <v-flex xm12>
            <v-text-field
              @click:append="show1 = !show1"
              v-model="password"
              :append-icon="show1 ? 'visibility_off' : 'visibility'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="password"
              label="Password"
              counter
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-btn xs12 @click="loginformSubmit" large class="orange wave-effect">
              Sign In
              <i class="pl-2 material-icons right">send</i>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
    <div v-html="error"/>
  </fullpage>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import authProtection from "@/utils/check-not-authenticated.js";
import fullpage from "@/templates/fullpage";
export default {
  name: "login",
  data() {
    return {
      username: "",
      show1: false,
      password: "",
      error: "",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match"
      }
    };
  },
  components: {
    fullpage
  },
  mounted() {
    authProtection(this);
  },
  methods: {
    async loginformSubmit(e) {
      e.preventDefault();
      try {
        const data = (await AuthenticationService.login({
          email: this.username,
          password: this.password
        })).data;
        //Storing the token and user information
        this.$store.dispatch("setToken", data.token);
        this.$cookies.set("auth-token", data.token, data.validity);
        this.$cookies.set("auth-user", data.user, data.validity);
        this.$store.dispatch("setUser", data.user);
        //Removing the error that are stored previously
        this.error = "";
        //redirecting the home page
        this.$router.push("/");
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

