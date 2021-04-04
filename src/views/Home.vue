<template>
  <section>
    <h1> Produtos </h1>
    <ProdutosLista/>
  </section>
</template>

<script>
import ProdutosLista from "@/components/ProdutosLista.vue";

export default {
  name: "home",
  components: {
    ProdutosLista
  },
  created() {
    document.title = "beCliente";
  }
};
</script>

<style scoped>
h1 {
  color: #87f;
  margin-top: 40px;
  font-size: 2rem;
  text-align: center;
}
</style>
