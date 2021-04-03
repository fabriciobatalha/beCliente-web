import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
import Login from "./views/Login.vue"
import Usuario from "./views/dash/Usuario.vue"

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
      path: "/usuario",
      component: Usuario,
      meta: {
        login: true
      }
      // children: [
      //   {
      //     path: "editar",
      //     name: "usuario-editar",
      //     component: UsuarioEditar
      //   }
      // ]
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
