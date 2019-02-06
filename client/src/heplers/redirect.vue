<template>
  <div>Loading....</div>
</template>

<script>
export default {
  mounted() {
    this.$router.push(`${this.$route.query.path}`);
  }
};
</script>
