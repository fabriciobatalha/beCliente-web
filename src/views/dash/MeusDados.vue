<template>
  <div class="card">
    <h2> {{ $store.state.usuario.nome }} </h2>
    <p class="info"> E-mail: {{ $store.state.usuario.email }} </p>
  </div>
</template>

<script>
export default {
  name: "MeusDados"
};
</script>

<style scoped>
.card {
  padding: 50px;
  background: #fff;
  border-radius: 20px;
  transition: all 0.2s;
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
}

h2 {
  color: #87f;
  font-weight: bold;
}

.info {
  margin-top: 20px;
}
</style>