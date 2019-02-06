<template>
  <v-card>
    <v-img :src="song.albumImageUrl"></v-img>

    <v-card-title primary-title>
      <div>
        <div class="headline">{{song.title}}</div>
        <span class="grey--text">{{song.artist}}</span>
      </div>
    </v-card-title>

    <v-card-actions>
      <v-btn flat>Share</v-btn>
      <v-btn flat color="purple" @click="navigateTo(`song/${song.id}`)">Explore</v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-slide-y-transition>
      <v-card-text v-show="show">
        Title - {{song.title}}
        <br>
        Artist - {{song.artist}}
        <br>
        Album - {{song.album}}
        <br>
        Genre - {{song.genre}}
      </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    show: false
  }),
  props: ["song"],
  methods: {
    navigateTo(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style>
iframe {
  width: 100%;
}
</style>
