<template>
  <fullpage>
    <v-layout justify-center>
      <v-flex xs12>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title class="text-capitalize">{{song.title}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <span class="title font-italic">By {{song.artist}}</span>
          </v-toolbar>
          <v-card-text>
            <v-layout row wrap>
              <v-flex xs12 md4 class="px-2 py-2">
                <v-card class="elevation-12" style="height: 100%;">
                  <v-toolbar dark color="primary">
                    <v-toolbar-title class="text-capitalize">MataData</v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    Genre - {{song.genre}}
                    <br>
                    Album - {{song.album}}
                    <div class="text-xs-center pt-5">
                      <v-btn
                        color="primary"
                        @click="navigateTo(`/song/${song.id}/edit`)"
                        justify-center
                        v-if="$store.state.isUserLoggedIn"
                      >Edit Song</v-btn>
                    </div>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md8 class="px-2 py-2">
                <v-card class="elevation-12" style="height: 100%;">
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
            <v-layout>
              <v-flex xs12 class="px-2 pt-2">
                <v-tabs
                  v-model="active"
                  class="elevation-12"
                  dark
                  color="primary"
                  slider-color="yellow"
                >
                  <v-tab key="1" ripple>Tabs</v-tab>
                  <v-tab-item key="1">
                    <v-card flat>
                      <v-card-text>
                        <pre>{{song.tab}}</pre>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                  <v-tab key="1" ripple>Lyrics</v-tab>
                  <v-tab-item key="1">
                    <v-card flat>
                      <v-card-text>
                        <pre>{{song.lyrics}}</pre>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs>
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
    navigateTo(path) {
      this.$router.push(path);
    }
  }
};
</script>
