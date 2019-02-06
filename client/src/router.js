import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue")
    },
    {
      path: "/auth/register/",
      name: "register",
      component: () => import("@/views/auth/Register.vue")
    },
    {
      path: "/song/:id",
      name: "song",
      component: () => import("@/views/GetSong")
    },
    {
      path: "/auth/login/",
      name: "login",
      component: () => import("@/views/auth/Login.vue"),
      meta: {
        title: "Search",
        metaTags: [
          {
            name: "description",
            content: "The home page of our example app."
          },
          {
            property: "og:description",
            content: "The home page of our example app."
          }
        ]
      }
    },
    {
      path: "/search/",
      name: "search",
      component: () => import("@/views/search.vue")
    },
    {
      path: "/redirect/",
      name: "redirect",
      component: () => import("@/heplers/redirect.vue")
    },
    {
      path: "/about/",
      name: "about",
      component: () => import("@/views/About.vue"),
      meta: {
        title: "About"
      }
    },
    {
      path: "/admin/create/song",
      name: "new song",
      component: () => import("@/views/admin/setSong.vue")
    },
    {
      path: "/404",
      component: () => import("@/errors/404.vue")
    },
    {
      path: "*",
      redirect: "/404"
    }
  ]
});
