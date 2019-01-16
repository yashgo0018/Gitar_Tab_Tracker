<template>
  <div id="app">
    <NavbarComponent/>
    <main class="container">
      <router-view/>
    </main>
    <FooterComponent/>
  </div>
</template>

<script>
import FooterComponent from "@/components/_partials/FooterComponent";
import NavbarComponent from "@/components/_partials/NavbarComponent";
export default {
  components: {
    FooterComponent,
    NavbarComponent
  }
};
</script>
