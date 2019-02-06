<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.$store.dispatch("setToken", this.$cookies.get("auth-token"));
    this.$store.dispatch("setUser", this.$cookies.get("auth-user"));
  }
};
</script>
