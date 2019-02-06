<template>
  <v-footer dark height="auto">
    <v-card style="width: 100%;" flat tile class="indigo lighten-1 white--text text-xs-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text
        class="white--text pt-0"
      >{{title}} is the one-stop solution for all your music needs. {{title}} offers you free, unlimited access to over Hindi Songs, Bollywood Music, English MP3 songs, Regional Music & Mirchi Play.</v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2019 —
        <strong>{{title}}</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
    ]
  })
};
</script>
