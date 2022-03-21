import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Registro from "../views/Registro.vue"
import Administracion from "../views/Administracion.vue";
import Login from "../views/Login.vue"
import About from "../views/About.vue"
import { getAuth } from "firebase/auth";
 
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    Component: About,
  },
  {
    path: "/Registro",
    name: "Registro",
    component: Registro
  },
  {
    path: "/Administracion",
    name: "Administracion",
    component: Administracion
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


export default router;
