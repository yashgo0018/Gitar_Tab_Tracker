<template>
  <v-form @submit="SearchSubmition">
    <v-text-field
      v-model="keyword"
      append-icon="search"
      class="mx-3"
      flat
      label="Search"
      prepend-inner-icon="search"
      solo-inverted
      @click:append="SearchSubmition"
    ></v-text-field>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      keyword: ""
    };
  },
  methods: {
    SearchSubmition(e) {
      e.preventDefault();
      this.$router.push("/redirect/?path=/search/?s=" + this.keyword);
    }
  },
  mounted() {
    this.keyword = this.$route.query.s ? this.$route.query.s : "";
  }
};
</script>
