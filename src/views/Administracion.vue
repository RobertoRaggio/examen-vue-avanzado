<template>
  <div>
    <div>
     
      <div class="nose">
         <h2 style="margin: 20px 0">Administración</h2>
        <b-button class="m-2" variant="primary" @click="$bvModal.show('bv-modal-example')">Agregar Curso</b-button>
              <b-modal id="bv-modal-example" hide-footer>
                  <template #modal-title>
                   Agregando Curso
                   </template>
             <div>
            <b-form-input  class="m-1" v-model="curso.nombreCurso" placeholder="Nombre del Curso"></b-form-input>
            <b-form-input class="m-1" v-model="curso.urlImg" placeholder="Url de la imagen del Curso"></b-form-input> 
            <b-form-input class="m-1" v-model="curso.cuposDelCurso" placeholder="Cupos del Curso"></b-form-input>
            <b-form-input class="m-1" v-model="curso.inscritosEnElCurso" placeholder="Inscritos en el Curso"></b-form-input> 
            <b-form-input class="m-1" v-model="curso.duracionDelCurso" placeholder="Duración del Curso"></b-form-input>
            <b-form-input class="m-1" v-model="curso.codigoDelCurso" placeholder="Codigo del Curso"></b-form-input>
              <b-form-textarea class="m-1" v-model="curso.descripcion" id="textarea-rows" placeholder="Descripción del curso" rows="8">
              </b-form-textarea>
              <div class="m-2">
               <b-button @click="addCurso" class="m-1" variant="success" >Registrar</b-button>
               <b-button class="m-1" variant="danger">Limpiar Formulario</b-button>
               <b-button class="m-1" variant="warning">Limpiar Validación</b-button>
               </div>
          </div>
          </b-modal>
          
        
      </div>
    </div>
  
      <table class="mx-4 tabla">
          <thead>
            <tr>
              <th>Curso</th>
              <th>Cupos</th>
              <th>Inscritos</th>
              <th>Meses</th>
              <th>Costo</th>
              <th>Terminado</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
        <tr v-for="(curso, i) in cursos" :key="i">
               <td>{{ curso.data.curso }}</td>
          <td>{{ curso.data.cupos }}</td>
          <td>{{ curso.data.inscritos }}</td>
          <td>{{ curso.data.meses }}</td>
          <td>{{ curso.data.costo }}</td>
          <td>{{ curso.data.terminado ? "SI" : "No" }}</td>
          <td>{{ curso.data.fecha.toDate() }}</td>
               <td>
                 <button @click="editarCurso(curso.id)" class="btn">🖊</button>
               </td>
               <td>
                 <button @click="deleteDoc(curso.id)"> Eliminar </button>
               </td>
              

            </tr>
          </tbody>

      </table>

      <div>
        <input class="uno m-2" type="text" readonly="readonly" placeholder="Cantidad maxima de estudiantes:"/>
        <input class="dos m-2" type="text" readonly="readonly" placeholder="Cantidad de Alumnos Inscritos:"/>
        <input class="tres m-2" type="text" readonly="readonly" placeholder="Cantidad de Cupos Restantes:"/>
        <input class="cuatro m-2" type="text" readonly="readonly" placeholder="Cantidad de Cursos Terminados:"/>
        <input class="cinco m-2" type="text" readonly="readonly" placeholder="Cantidad de Cursos Activos:"/>
        <input class="seis m-2" type="text" readonly="readonly" placeholder="Cantidad Total de Cursos:"/>
      </div>
   
  </div>
</template>
<script>
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore"; //
export default {
  name: "About",

  data() {
    return {
      curso: {
        nombreCurso: "",
        urlImg: "",
        cuposDelCurso: "",
        inscritosEnElCurso: "",
        duracionDelCurso: "",
        codigoDelCurso: "",
        descripcion: "",
      },
      cursoSeleccionado: {
        id: "",
        data: {
          nombreCurso: "",
          urlImg: "",
          cuposDelCurso: "",
          inscritosEnElCurso: "",
          duracionDelCurso: "",
          codigoDelCurso: "",
          descripcion: "",
        },
      },

      cursos: [],
      modalShow: false,
    };
  },
  methods: {
    async addCurso() {
      alert("Regristro con exito!");
      const db = getFirestore();

      const coleccion = collection(db, "cursos");

      const documento = this.curso;
      await addDoc(coleccion, documento);
    },
    async getCurso() {
      const db = getFirestore();
      const coleccion = collection(db, "cursos");
      const q = query(coleccion);

      onSnapshot(q, (querySnapshot) => {
        const cursos = [];
        querySnapshot.forEach((doc) => {
          const curso = { id: doc.id, data: doc.data() };
          cursos.push(curso);
        });
        this.cursos = cursos;
      });
    },
    async borrar(id) {
      const db = getFirestore();
      const coleccion = "cursos";
      await deleteDoc(doc(db, coleccion, id));
      alert("Curso Eliminado!");
    },

    ///EDITAR
    onEditarCurso(id) {
      const { cursos } = this;
      const resultado = { ...cursos.find((u) => u.id === id) };
      this.modalShow = true;
      this.cursoSeleccionado = resultado;
    },
    async actualizarCurso() {
      const db = getFirestore();
      const { id, data } = this.cursoSeleccionado;
      await setDoc(doc(db, "cursos", id), data);
      this.modalShow = false;
    },
  },
  mounted() {
    this.getCurso();
  },
};
</script>




<style >
input {
    border-radius: 0.3rem;
 padding:0.2rem;
 border:0.1rem solid;
  margin: 0.4rem;
  width: 100%;
  box-shadow: 1px 2px 1px #aaaaaa;;
  
}
.uno {
  border-color: rgb(140, 92, 236);
}
.dos {
  border-color: rgb(11, 255, 255);
}
.tres {
  border-color: orangered;
}
.cuatro {
  border-color: crimson;
}
.cinco {
  border-color: saddlebrown;
}
.seis {
  border-color:orange;
}
.nose{
  display: flex;
  justify-content: center;
  align-items: center;
}
.tabla{
  align-items: center
}


</style>