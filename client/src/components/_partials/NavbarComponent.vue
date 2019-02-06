<template>
  <div>
    <v-toolbar>
      <v-toolbar-items class="hidden-md-and-up">
        <v-btn @click.stop="drawer = !drawer" flat>
          <v-icon>dehaze</v-icon>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-title @click="navigateTo('/')">{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item in items" :key="item.title" @click="navigateTo(item.path)" flat>
          <v-icon>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile v-for="item in items" :key="item.title" @click="navigateTo(item.path)">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      drawer: null,
      items: [{ title: "About", icon: "question_answer", path: "/about/" }]
    };
  },
  mounted() {
    if (this.$store.state.isUserLoggedIn) {
      this.items = [
        ...this.items,
        { title: "Logout", icon: "", path: "/auth/logout/" },
        {
          title: "Add Song",
          path: "/admin/create/song"
        }
      ];
    } else {
      this.items = [
        ...this.items,
        { title: "SignIn", icon: "", path: "/auth/login/" },
        { title: "SignUp", icon: "", path: "/auth/register/" }
      ];
    }
  },
  methods: {
    navigateTo(path) {
      if (path != "/auth/logout/") {
        this.$router.push(path);
      } else {
        this.$store.dispatch("setUser", null);
        this.$store.dispatch("setToken", null);
        this.$cookies.remove("auth-token");
        this.$cookies.remove("auth-user");
        //redirecting to login page
        this.$router.push("/auth/login/");
      }
    }
  }
};
</script>

<style scoped>
.v-toolbar__title {
  cursor: pointer;
}
</style>
