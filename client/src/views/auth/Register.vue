<template>
  <fullpage>
    <div class="display-4 font-weight-thin orange--text text--lighten-1 text-xs-center">Sign Up</div>

    <v-form>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs6>
            <v-text-field
              v-model="user.fname"
              :rules="[rules.required]"
              type="text"
              name="fname"
              label="First Name"
            ></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              v-model="user.lname"
              :rules="[rules.required]"
              type="text"
              name="lname"
              label="Last Name"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              v-model="user.email"
              :rules="[rules.required]"
              type="email"
              name="email"
              label="Email"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field
              v-model="user.username"
              :rules="[rules.required, rules.min]"
              type="text"
              name="username"
              label="Username"
            ></v-text-field>
          </v-flex>
          <v-flex xm12>
            <v-text-field
              v-model="user.password"
              :append-icon="show1 ? 'visibility_off' : 'visibility'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="password"
              label="Password"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-flex>

          <v-flex xm12>
            <v-text-field
              v-model="password2"
              :append-icon="show2 ? 'visibility_off' : 'visibility'"
              :rules="[rules.required, rules.min]"
              :type="show2 ? 'text' : 'password'"
              name="password2"
              label="Confirm Password"
              counter
              @click:append="show2 = !show2"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-btn xs12 @click="formSubmit" large class="orange wave-effect">
              Sign Up
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
  name: "register",
  data() {
    return {
      show1: false,
      show2: false,
      user: {
        fname: "",
        lname: "",
        email: "",
        username: "",
        password: ""
      },
      password2: "",
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
    async formSubmit(e) {
      e.preventDefault();
      if (this.user.password === this.password2) {
        try {
          const data = (await AuthenticationService.register(this.user)).data;
          this.$store.dispatch("setToken", data.token);
          this.$cookies.set("auth-token", data.token, data.validity);
          this.$cookies.set("auth-user", data.user, data.validity);
          this.$store.dispatch("setUser", data.user);
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

