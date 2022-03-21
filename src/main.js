import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { initializeApp } from "firebase/app";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

const firebaseConfig = {
  apiKey: "AIzaSyBJd6FXEDfPsKbLmRZKFDFAl8Ng8m_YuzY",
  authDomain: "examen-vue-f2ac7.firebaseapp.com",
  projectId: "examen-vue-f2ac7",
  storageBucket: "examen-vue-f2ac7.appspot.com",
  messagingSenderId: "4912847922",
  appId: "1:4912847922:web:6970801576b24d8bdef02b",
  measurementId: "G-TM2YY9XVDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
