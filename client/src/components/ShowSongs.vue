<template>
  <v-layout row wrap justify-center>
    <v-flex xs8 sm6 py-2 px-2 lg4 md4 v-for="song in songs" :key="song.id">
      <card :song="song"/>
    </v-flex>
  </v-layout>
</template>

<script>
import card from "@/templates/cards";

export default {
  props: ["songs"],
  components: {
    card
  }
};
</script>
