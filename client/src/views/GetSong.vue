<template>
  <fullpage>
    <v-layout justify-center>
      <v-flex xs12 sm8 md12>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title class="text-capitalize">{{song.title}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <span class="title font-italic">By {{song.artist}}</span>
          </v-toolbar>
          <v-card-text>
            <v-layout>
              <v-flex xs12 sm8 md6>
                <v-card class="elevation-12">
                  <v-toolbar dark color="primary">
                    <v-toolbar-title class="text-capitalize">MataData</v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    Genre - {{song.genre}}
                    <br>
                    Album - {{song.album}}
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 sm8 md6>
                <v-card class="elevation-12">
                  <v-toolbar dark color="primary">
                    <v-toolbar-title class="text-capitalize">Youtube Video</v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <youtube
                      :video-id="song.youtubeVideoid"
                      :player-vars="playerVars"
                      :fitParent="true"
                      :resize="true"
                      class="pr-4"
                    ></youtube>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </fullpage>
</template>

<script>
import fullpage from "../templates/fullpage";
import SongService from "../services/SongService.js";
export default {
  data() {
    return {
      song: null,
      id: null,
      playerVars: {
        autoplay: 1,
        fitParent: true,
        resize: true
      }
    };
  },
  components: {
    fullpage
  },
  async mounted() {
    this.id = this.$route.params.id;
    this.song = (await SongService.getSong(this.id)).data;
  },
  methods: {
    playing() {
      console.log("o/ we are watching!!!");
    }
  }
};
</script>
