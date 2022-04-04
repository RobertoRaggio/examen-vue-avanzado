<template>
  <div>
    <div>
      <div class="nose">
        <h2 style="margin: 20px 0">Administración</h2>
        <b-button class="m-2" variant="primary" @click="$bvModal.show('bv-modal-example')">Agregar Curso</b-button>
        <b-modal id="bv-modal-example" hide-footer>
          <template #modal-title> Registrando un nuevo curso </template>
          <div>
            <b-form-input class="m-1" v-model="curso.nombreDelCurso" placeholder="Nombre del Curso"></b-form-input>
            <b-form-input class="m-1" v-model="curso.urlImg" placeholder="Url de la imagen del Curso"></b-form-input>
            <b-form-input class="m-1" type="number" v-model="curso.cuposDelCurso" placeholder="Cupos del Curso"></b-form-input>
            <b-form-input class="m-1" type="number" v-model="curso.inscritosEnElCurso" placeholder="Inscritos en el Curso"></b-form-input>
            <b-form-input class="m-1" v-model="curso.duracionDelCurso" placeholder="Duración del Curso"></b-form-input>
            <b-form-input class="m-1" v-model="curso.costoDelCurso" placeholder="Costo del Curso"></b-form-input>
            <b-form-input class="m-1" v-model="curso.codigoDelCurso" placeholder="Codigo del Curso"></b-form-input>
            <b-form-textarea class="m-1" v-model="curso.descripcion" id="textarea-rows" placeholder="Descripción del curso" rows="8">
            </b-form-textarea>
            <div class="m-2">
              <b-button @click="agregarCurso" class="m-1" variant="success">Registrar</b-button>
              <b-button class="m-1" variant="danger">Limpiar Formulario</b-button>
              <b-button class="m-1" variant="warning">Limpiar Validación</b-button>
            </div>
          </div>
        </b-modal>
      </div>
    </div>
    <b-container>
      <table>
        <thead>
          <tr>
            <th>Cursos</th>
            <th>Cupos</th>
            <th>Inscritos</th>
            <th>Duración</th>
            <th>Costo</th>
            <th>Finalizado</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(curso, i) in cursos" :key="i">
            <td>{{ curso.nombreDelCurso }}</td>
            <td>{{ curso.cuposDelCurso }}</td>
            <td>{{ curso.inscritosEnElCurso }}</td>
            <td>{{ curso.duracionDelCurso }}</td>
            <td>{{ curso.costoDelCurso }}</td>
            <td>{{ curso.terminado }}</td>
            <td>{{ curso.fechaDelCurso }}</td>
            <td>
              <b-button style="margin-right:20px;" @click="onEditarCurso(curso.id)">Editar</b-button>
              <b-button @click="borrar(curso.id)"> Eliminar </b-button>
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        <p class="caja-alumnos">La cantidad de alumnos permitidos es: {{ getAlumnosPermitidos }} alumnos</p>
        <p class="caja-inscritos">La cantidad de alumnos inscritos es: {{ getInscritos }} alumnos</p>
        <p class="caja-restantes">La cantidad de cupos restantes es: {{ getCuposRestantes }} alumnos</p>
        <p class="caja-finalizados">La cantidad de cursos Finalizados es: {{ getTerminados }} alumnos</p>
        <p class="caja-activos">La cantidad de cursos activos es: {{ getActivos }} alumnos</p>
        <p class="caja-total">La cantidad de cursos es: {{ getTotalCursos }} alumnos</p>
      </div>

      <b-modal v-model="modalShow" hide-footer>
        <h1>Editar</h1>

        <div class="m-3"><label>Nombre del curso</label><input v-model="cursoSeleccionado.nombreDelCurso" /></div>
        <div class="m-3"><label>Url de imagen del curso</label><input v-model="cursoSeleccionado.urlImg" /></div>
        <div class="m-3"><label>Cupos del curso</label><input v-model="cursoSeleccionado.cuposDelCurso" /></div>
        <div class="m-3"><label>Inscritos en el curso</label><input v-model="cursoSeleccionado.inscritosEnElCurso" /></div>
        <div class="m-3"><label>Duración del curso</label><input v-model="cursoSeleccionado.duracionDelCurso" /></div>
        <div class="m-3"><label>Descripción del curso</label><b-form-textarea v-model="cursoSeleccionado.descripcion" id="textarea-rows" rows="8"></b-form-textarea></div>
        <b-button @click="actualizar" class="m-1" variant="success">Actualizar</b-button>
      </b-modal>
    </b-container>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "Administracion",

  data() {
    return {
      curso: {
        nombreDelCurso: "",
        urlImg: "",
        cuposDelCurso: "",
        inscritosEnElCurso: "",
        duracionDelCurso: "",
        costoDelCurso: "",
        terminado: "",
        fechaDelCurso: "",
        codigoDelCurso: "",
        descripcion: "",
      },
      cursoSeleccionado: {
        id: "",
        nombreDelCurso: "",
        urlImg: "",
        cuposDelCurso: "",
        inscritosEnElCurso: "",
        duracionDelCurso: "",
        costoDelCurso: "",
        terminado: "",
        fechaDelCurso: "",
        codigoDelCurso: "",
        descripcion: "",
      },

      modalShow: false,
    };
  },
  methods: {
    ...mapActions(["getCursos", "addCursos", "actualizarCurso", "deleteCurso"]),
    async agregarCurso() {
      const newDate = new Date(new Date().setMonth(new Date().getMonth() + 7));
      const newCurso = {
        ...this.curso,
        terminado: "No",
        fechaDelCurso: newDate.toLocaleDateString(),
      };
      await this.addCursos(newCurso);
    },
    async borrar(id) {
      await this.deleteCurso(id);
    },
    async actualizar() {
      const { cursoSeleccionado } = this;
      await this.actualizarCurso(cursoSeleccionado);
    },

    onEditarCurso(id) {
      const { cursos } = this;
      const resultado = { ...cursos.find((u) => u.id === id) };
      this.modalShow = true;
      this.cursoSeleccionado = resultado;
    },
  },
  async mounted() {
    await this.getCursos();
  },
  computed: {
    ...mapState(["cursos"]),
    ...mapGetters([
      "getAlumnosPermitidos",
      "getInscritos",
      "getCuposRestantes",
      "getTerminados",
      "getActivos",
      "getTotalCursos",
    ]),
  },
};
</script>

<style >
input {
  border-radius: 0.3rem;
  padding: 0.2rem;
  border: 0.1rem solid;
  margin: 0.4rem;
  width: 100%;
  box-shadow: 1px 2px 1px #aaaaaa;
}
.nose {
  display: flex;
  justify-content: center;
  align-items: center;
}
table {
  text-align: left;
  width: 100%;
}
th {
  padding-right: 20px;
  padding-bottom: 20px;
}
td {
  padding-right: 20px;
  padding-bottom: 10px;
}
.caja-alumnos {
  text-align: left;
  padding: 10px;
  border: solid 1px rgb(140, 92, 236);
}
.caja-inscritos {
  text-align: left;
  padding: 10px;
  border: solid 1px rgb(11, 255, 255);
}
.caja-restantes {
  text-align: left;
  padding: 10px;
  border: solid 1px orangered;
}
.caja-finalizados {
  text-align: left;
  padding: 10px;
  border: solid 1px crimson;
}
.caja-activos {
  text-align: left;
  padding: 10px;
  border: solid 1px saddlebrown;
}
.caja-total {
  text-align: left;
  padding: 10px;
  border: solid 1px orange;
}
</style>