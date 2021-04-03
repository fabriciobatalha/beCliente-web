<template>
  <div class="meus-dados">
    <div class="info">
      <h2> Nome: {{$store.state.usuario.nome}} </h2>
      <p> E-mail: {{$store.state.usuario.email}} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MeusDados"
}
</script>

<style scoped>
.meus-dados {}

.info {}

h2 {
  margin-bottom: 20px;
}
</style>