import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Registrar from "../views/Registrar.vue"
import Administracion from "../views/Administracion.vue";
import Login from "../views/Login.vue";
import { getAuth } from "firebase/auth";
 
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home, 
    meta: {
      authRequired: true,
    }
  },
  {
    path: "/Registrar",
    name: "Registrar",
    component: Registrar
  },
  {
    path: "/Administracion",
    name: "Administracion",
    component: Administracion,
    meta: {
      authRequired: true,
    }
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
    meta: {
      authRequired: true,
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


router.beforeEach((to, from, next) => {
  const { currentUser } = getAuth()
  const { meta: { authRequired } } = to;

  if (currentUser && authRequired) {
    next()
  }
  else if (!currentUser && authRequired) {
    next("/login")
  }
  else if (currentUser && !authRequired) {
    next("/")
  }
  else {
    next()
  }
})
export default router;
