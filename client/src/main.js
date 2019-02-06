import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "@/store/store";
import { sync } from "vuex-router-sync";
import VueCookies from "vue-cookies";
import VueYoutube from "vue-youtube";
import config from "./config";
import title_setter from "./heplers/title_setter";

Vue.use(VueYoutube);

title_setter(router);

Vue.prototype.title = config.title;

Vue.use(VueCookies);
Vue.config.productionTip = false;
// set global cookie
VueCookies.set("theme", "default");
VueCookies.set("hover-time", "1s");

sync(store, router);

new Vue({
  router,
  store,
  template: "",
  render: h => h(App)
}).$mount("#app");
