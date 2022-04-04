import Vue from "vue";
import Vuex from "vuex";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import {
  addDoc,
  collection,
  getFirestore,
  onSnapshot,
  query,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userLogin: null,
    cursos: [],
  },
  mutations: {
    SET_USER_LOGIN(state, payload) {
      state.userLogin = payload;
    },
    SET_CURSOS(state, payload) {
      state.cursos = payload;
    }
  },
  actions: {
    async registrar_Usuario(context, usuario) {
      const { email, password } = usuario;
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      alert("El usuario se registró con exito!");
    },
    async iniciarSesion(context, usuario) {
      const { email, password } = usuario;
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
    },
    getUserLogin(context) {
      const { commit } = context;
      getAuth().onAuthStateChanged((user) => {
        if (user) {
          commit("SET_USER_LOGIN", user.email);
        }
      });
    },
    async deslogearse(context) {
      const { commit } = context;
      getAuth()
        .signOut()
        .then((response) => {
          alert("Desconectado");
          commit("SET_USER_LOGIN", null);
        });
    },
    async getCursos(context) {
      const { commit } = context;
      const db = getFirestore();
      const queryRequest = query(collection(db, "cursos"));
      onSnapshot(queryRequest, (querySnapshot) => {
        const arregloCursos = [];
        querySnapshot.forEach((doc) => {
          const curso = {
            id: doc.id,
            ...doc.data(),
          }
          arregloCursos.push(curso)
        })
        commit("SET_CURSOS", arregloCursos)
      });
    },
    async addCursos(context, nuevoCurso) {
      const db = getFirestore();
      const docRef = await addDoc(collection(db, "cursos"), nuevoCurso);
      console.log(docRef.id)
    },
    async deleteCurso(context, id) {
      const db = getFirestore();
      await deleteDoc(doc(db, "cursos", id));
    },
    async actualizarCurso(cursoSeleccionado) {
      const db = getFirestore();
      const { id } = cursoSeleccionado;
      const userRefDoc = doc(db,"cursos",id);
      await updateDoc(userRefDoc,cursoSeleccionado);
    },
  },
  getters: {
    getTotal({ cursos }) {
      const countAlumnosEnElCurso = cursos.reduce(
        (previusValue, currentValue) =>
          previusValue + parseInt(currentValue.cuposDelCurso),
        0
      );
      return countAlumnosEnElCurso;
    },
    getAlumnosInscritos({ cursos }) {
      const countAlumnosInscritos = cursos.reduce(
        (previusValue, currentValue) =>
          previusValue + parseInt(currentValue.inscritosEnElCurso),
        0
      );
      return countAlumnosInscritos;
    },
    getCantidadRestantes({ cursos }, getters) {
      return getters.getTotal - getters.getAlumnosInscritos;
    },
    getCursosTerminados({ cursos }) {
      const countCoursesFinished = cursos?.filter(
        (curso) => curso?.cursoConcluido
      )?.length;
      return countCoursesFinished;
    },
    getCursosActivos({ cursos }) {
      const countCoursesActive = cursos?.filter(
        (curso) => !curso?.cursoConcluido
      )?.length;
      return countCoursesActive;
    },
    getTodosLosCursos({ cursos }) {
      const countCourses = cursos?.length;
      return countCourses;
    },
  }
});