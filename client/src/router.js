import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/auth/register/",
      name: "register",
      component: () => import("@/views/auth/Register.vue")
    },
    {
      path: "/auth/login/",
      name: "login",
      component: () => import("@/views/auth/Login.vue")
    },
    {
      path: "/about/",
      name: "about",
      component: () => import("@/views/About.vue")
    }
  ]
});
