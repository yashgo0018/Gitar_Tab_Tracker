<template>
  <div>
    <NavbarComponent/>
    <main class="container">
      <search v-if="!(search == false)"/>
      <slot/>
    </main>
    <FooterComponent/>
  </div>
</template>

<script>
import FooterComponent from "@/components/_partials/FooterComponent";
import NavbarComponent from "@/components/_partials/NavbarComponent";
import search from "../components/search";
export default {
  name: "fullpage",
  components: {
    FooterComponent,
    NavbarComponent,
    search
  },
  props: ["search"]
};
</script>
