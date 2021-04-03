import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ErroNotificacao from "@/components/ErroNotificacao.vue";

Vue.config.productionTip = false;

Vue.component("ErroNotificacao", ErroNotificacao);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");