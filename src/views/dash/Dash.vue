<!--<template>
  <p> Página do Usuário: {{$store.state.usuario}} </p>
</template>-->

<template>
  <section class="dash">
    <nav class="sidenav">
      <ul>
        <li>
          <router-link :to="{name: 'meus-dados'}"> Meus Dados </router-link>
        </li>
        <li>
          <router-link :to="{name: 'endereco'}"> Endereço </router-link>
        </li>
        <li>
          <button @click="deslogar">Deslogar</button>
        </li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: "Dash",
  methods: {
    deslogar() {
      this.$store.dispatch("deslogarUsuario");
      this.$router.push("/login");
    }
  },
  created() {
    document.title = "Dash";
  }
};
</script>

<style scoped>
.dash {
  display: grid;
  grid-template-columns: minmax(140px, 200px) 1fr;
  max-width: 900px;
  margin: 40px auto;
  grid-gap: 30px;
  padding: 20px;
}

@media screen and (max-width: 500px) {
  .dash {
    grid-template-columns: 1fr;
    margin: 0px auto;
  }
}

.sidenav a,
.sidenav button {
  padding: 10px;
  display: block;
  background: #f4f7fc;
  margin-bottom: 10px;
  border-radius: 4px;
}

.sidenav a.router-link-exact-active,
.sidenav a:hover,
.sidenav button:hover {
  background: #87f;
  color: #fff;
}

.sidenav button {
  border: none;
  width: 100%;
  font-size: 1rem;
  text-align: left;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  cursor: pointer;
}
</style>