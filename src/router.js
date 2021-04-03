import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
import Login from "./views/Login.vue"
import Dash from "./views/dash/Dash.vue"
import MeusDados from "./views/dash/MeusDados.vue"
import Endereco from "./views/dash/Endereco.vue"

Vue.use(Router)

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/dash",
      name: "dash",
      component: Dash,
      children: [
        {
          path: "meus-dados",
          name: "meus-dados",
          component: MeusDados
        },
        {
          path: "endereco",
          name: "endereco",
          component: Endereco
        }
      ],
      meta: {
        login: true,
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.login)) {
    if (!window.localStorage.token) {
      next("/login");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router
