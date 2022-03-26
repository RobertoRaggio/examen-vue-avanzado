<template>
  <div>
    <h1>Login Usuario</h1>
    <b-container class="bv-example-row">
     <div>
        <input class="m-2" placeholder="E-mail" v-model="usuario.email" />
        <input class="m-2" placeholder="Password" v-model="usuario.password" type="password"/>
        <b-button class="m-3" variant="success" @click="registrarUsuario">Iniciar</b-button>
        <b-button class="m-3" variant="danger">Limpiar Formulario</b-button>
        
        <p class="text-danger" v-if="error">{{error}}</p>
        <b-button class="m-3" variant="warning" @click="error">Limpiar Validación</b-button>
        
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
//estado local email,usuario, contraseña
export default {
  methods: {
    ...mapActions(["register_User"]),
    async registrarUsuario() {
      try {
      const { usuario } = this;
      //registro exitoso
      await this.register_User(usuario);
      this.usuario.email="";
      this.usuario.password="";
      this.error="";
      }
      //error de registro
      catch (error) {
        alert ("Error, No estas logeado");
        this.error = error.code;
      }
    },
  },
    data() {
    return {
      usuario: {
        email: "",
        password: "",
      },
      error: null,
    };
  },
}

</script>


<style>
</style>