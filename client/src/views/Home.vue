<template>
  <fullpage>
    <show-songs :songs="songs"/>
  </fullpage>
</template>

<script>
import fullpage from "@/templates/fullpage";
import SongService from "@/services/SongService";
import ShowSongs from "../components/ShowSongs";

export default {
  data() {
    return {
      songs: null
    };
  },
  components: {
    fullpage,
    ShowSongs
  },
  async mounted() {
    const headers = {
      Authorization: "Bearer " + this.$store.state.token
    };
    this.songs = (await SongService.getSongs(headers)).data;
  }
};
</script>
