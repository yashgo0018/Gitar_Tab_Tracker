<template>
  <fullpage :search="false">
    <div class="display-4 font-weight-thin orange--text text--lighten-1 text-xs-center">Sign Up</div>
    <v-form>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs6>
            <v-text-field
              v-model="song.title"
              :rules="[rules.required]"
              type="text"
              name="title"
              label="Title"
            ></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              v-model="song.artist"
              :rules="[rules.required]"
              type="text"
              name="artist"
              label="Artist"
            ></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              v-model="song.genre"
              :rules="[rules.required]"
              type="text"
              name="genre"
              label="Genre"
            ></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              v-model="song.album"
              :rules="[rules.required]"
              type="text"
              name="album"
              label="Album"
            ></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              v-model="song.albumImageUrl"
              :rules="[rules.required]"
              name="albumImageUrl"
              label="Album Image Url"
            ></v-text-field>
          </v-flex>

          <v-flex xs6>
            <v-text-field
              v-model="song.youtubeVideoid"
              :rules="[rules.required]"
              name="youtubeVideoid"
              label="Youtube Video Id"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-textarea
              name="input-7-4"
              v-model="song.lyrics"
              label="Lyrics"
              value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
            ></v-textarea>
          </v-flex>
          <v-flex xs12>
            <v-textarea
              name="input-7-4"
              v-model="song.tab"
              label="Tabs"
              value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
            ></v-textarea>
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
    <div v-html="err"/>
  </fullpage>
</template>

<script>
import fullpage from "../../templates/fullpage";
import SongService from "../../services/SongService";
import authProtection from "@/utils/check-authenticated.js";

export default {
  data() {
    return {
      song: {},
      err: "",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters"
      }
    };
  },
  components: {
    fullpage
  },
  async mounted() {
    authProtection(this);
    try {
      this.song = (await SongService.getSong(this.$route.params.id)).data;
    } catch (err) {
      this.err = "error";
    }
  },
  methods: {
    async formSubmit() {
      this.song = (await SongService.updateSong(
        this.$route.params.id,
        this.song
      )).data;
    }
  }
};
</script>
