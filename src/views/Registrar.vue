<template>
  <div>
    <h1>Registrar un Usuario</h1>
    <b-container class="bv-example-row">
      <div>
        <input v-model="usuario.email" class="m-2" placeholder="E-mail" />
        <input v-model="usuario.password" class="m-2" placeholder="Password" type="password"/>
        <b-button @click="registrar" class="m-3" variant="success">Registrar</b-button>
        <b-button class="m-3" variant="danger">Limpiar Formulario</b-button>
        <b-button class="m-3" variant="warning">Limpiar Validación</b-button>
        <p class="text-danger" v-if="error">{{error}}</p>
      </div>
    </b-container>
  </div>
</template>

<script>
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { mapActions } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      usuario: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
        ...mapActions(["registrate"]),
    async registrando() {
      alert("Regristra con exito!");
      const db = getFirestore();
      const coleccion = collection(db, "usuarios");
      const documento = this.usuario;
      await addDoc(coleccion, documento);
    },
    async registrar() {
      const { email, password } = this.usuario;
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
</style>