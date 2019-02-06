<template>
  <fullpage>
    <div class="display-4 font-weight-thin orange--text text--lighten-1 text-xs-center">Sign Up</div>
    <v-form>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs6>
            <v-text-field
              v-model="title"
              :rules="[rules.required]"
              type="text"
              name="title"
              label="Title"
            ></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              v-model="artist"
              :rules="[rules.required]"
              type="text"
              name="artist"
              label="Artist"
            ></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              v-model="genre"
              :rules="[rules.required]"
              type="text"
              name="genre"
              label="Genre"
            ></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              v-model="album"
              :rules="[rules.required, rules.min]"
              type="text"
              name="album"
              label="Album"
            ></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              v-model="albumImageUrl"
              :rules="[rules.required]"
              name="albumImageUrl"
              label="Album Image Url"
            ></v-text-field>
          </v-flex>

          <v-flex xs6>
            <v-text-field
              v-model="youtubeVideoid"
              :rules="[rules.required]"
              name="youtubeVideoid"
              label="Youtube Video Id"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-textarea
              name="input-7-4"
              v-model="lyrics"
              label="Lyrics"
              value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
            ></v-textarea>
          </v-flex>
          <v-flex xs12>
            <v-textarea
              name="input-7-4"
              v-model="tabs"
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
    <div v-html="error"/>
  </fullpage>
</template>

<script>
import SongService from "@/services/SongService";
import authProtection from "@/utils/check-authenticated.js";
import fullpage from "@/templates/fullpage";
export default {
  name: "register",
  data() {
    return {
      title: "",
      artist: "",
      genre: "",
      album: "",
      lyrics: "",
      tabs: "",
      albumImageUrl: "",
      youtubeVideoid: "",
      error: "",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters"
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
      try {
        const data = (await SongService.setSong({
          title: this.title,
          artist: this.artist,
          genre: this.genre,
          album: this.album,
          albumImageUrl: this.albumImageUrl,
          youtubeVideoid: this.youtubeVideoid,
          lyrics: this.lyrics,
          tab: this.tabs
        })).data;
        this.error = "";
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>


