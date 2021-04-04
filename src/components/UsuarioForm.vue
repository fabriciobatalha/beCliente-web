<template>
  <form>
    <label for="nome">Nome</label>
    <input id="nome" name="nome" type="text" v-model="nome">
    <label for="email">Email</label>
    <input id="email" name="email" type="email" v-model="email">
    <label for="senha">Senha</label>
    <input id="senha" name="senha" type="password" v-model="senha">
    <label for="cep">Cep</label>
    <input id="cep" name="cep" type="number" v-model="cep" @keyup="preencherCep" maxlength = "8" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">
    <label for="rua">Rua</label>
    <input id="rua" name="rua" type="text" v-model="rua">
    <label for="numero">Numero</label>
    <input id="numero" name="numero" type="number" v-model="numero">
    <label for="bairro">Bairro</label>
    <input id="bairro" name="bairro" type="text" v-model="bairro">
    <label for="cidade">Cidade</label>
    <input id="cidade" name="cidade" type="text" v-model="cidade">
    <label for="estado">Estado</label>
    <input id="estado" name="estado" type="text" v-model="estado">
    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
import { mapFields } from "@/helpers.js";
import { getCep } from "@/services.js";
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import Vue from "vue";
Vue.use(VueToast);

export default {
  computed: {
    ...mapFields({
      fields: [
        "nome",
        "email",
        "senha",
        "rua",
        "cep",
        "numero",
        "bairro",
        "cidade",
        "estado"
      ],
      base: "usuario",
      mutation: "UPDATE_USUARIO"
    })
  },
  methods: {
    preencherCep() {
      const cep = this.cep.replace(/\D/g, "");
      if (cep.length === 8) {
        getCep(cep).then(response => {
          this.rua = response.data.logradouro;
          this.bairro = response.data.bairro;
          this.estado = response.data.uf;
          this.cidade = response.data.localidade;
        });

        Vue.$toast.clear();
        Vue.$toast.success('O CEP contêm 8 dígitos!');
      } else {
        Vue.$toast.clear();
        Vue.$toast.error('Informe um CEP válido com 8 digitos!');
      }
    }
  }
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}

.button {
  grid-column: 2;
  margin-top: 10px;
}
</style>
