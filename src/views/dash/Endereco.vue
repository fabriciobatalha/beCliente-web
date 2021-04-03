<template>
  <div class="card">
    <h2> {{ $store.state.usuario.rua }}, {{ $store.state.usuario.numero }} - {{ $store.state.usuario.cep }} </h2>
    <p class="info"> Bairro: {{ $store.state.usuario.bairro }} </p>
    <p class="info"> Cidade: {{ $store.state.usuario.cidade }} </p>
    <p class="info"> Estado: {{ $store.state.usuario.estado }} </p>
  </div>
</template>

<script>
export default {
  name: "Endereco",
  created() {
    document.title = " Dash | Endereço";
  }
}
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