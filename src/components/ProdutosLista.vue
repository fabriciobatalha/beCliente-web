<template>
  <section class="produtos-container">
    <div v-for="produto in produtos" :key="produto.id">
      <!-- <img v-if="produto.fotos" :src="produto.fotos[0].src" :alt="produto.fotos[0].titulo"> -->
      <p class="preco"> Nome: {{produto.name}} </p>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  data() {
    return {
      produtos: null
    };
  },
  methods: {
    getProdutos() {
       api.getProds().then(response =>{
        //  console.log(response.data.results);
         this.produtos = response.data.results;
       });
    }
  },
  created() {
    this.getProdutos();
  }
};
</script>

<style>
</style>
