<template>
 <div>
    <b-navbar class="nav p-2" toggleable="lg" type="dark" variant="">
      <b-navbar-brand href="#">Cursos AlfaWeb</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/login">Login</b-nav-item>
          <b-nav-item to="/registrar">Registrar</b-nav-item>
          <b-nav-item to="/administracion">Administracion</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

      <b-nav-item v-if="loginUser == null" to="/login" @click="login"><span style="color: #fff;"> Iniciar Sesion </span></b-nav-item>
      <span v-else>
        {{ loginUser }}
        <span @click="logout" v-b-tooltip.hover title="Exit"
          ><b-avatar icon="door-closed"> </b-avatar
        ></span>
      </span>
    </b-navbar>
  </div>

</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Navbar",
  mounted() {
    this.getloginUser();
  },
  methods: {
    ...mapActions(["getloginUser", "deslogearse", "iniciarSesion"]),
    async logout() {
      await this.deslogearse();
      this.$router.push("/login");
    },
    async login() {
      const{email, password} = this.usuario
      await this.iniciarSesion({email, password});
        this.$router.push("/login");
    },
  },
  computed: {
    ...mapState(["loginUser"]),
  },
};
</script>

<style >
.nav {
  background-color: #563d7c;
}
span {
  color: #fff;
}
</style>