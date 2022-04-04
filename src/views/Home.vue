<template>
<b-container class="bv-example-row">
  <h2 style="margin: 20px 0">Lista de Cursos</h2>
  <b-row>
    <b-col v-for="(curso, i) in cursos" :key="i">
      <b-card no-body :img-src="curso.urlImg" img-alt="Image" img-top >
          <template #header>
            <h6 class="mb-0">{{ curso.nombreDelCurso }}</h6>
          </template>

          <b-list-group flush>
            <b-list-group-item>Costo: <b>{{ curso.costoDelCurso }}</b><br>Duración: {{ curso.duracionDelCurso }}</b-list-group-item>
            <b-list-group-item>Cupos: <b>{{ curso.cuposDelCurso }}</b><br>Finalizado: {{ curso.terminado }}</b-list-group-item>
            <b-list-group-item>Fecha de Inicio:<br>{{ curso.fechaDelCurso }}</b-list-group-item>
            <b-list-group-item>Descripción:<br>{{ curso.descripcion }}</b-list-group-item>
          </b-list-group>

        </b-card>
    </b-col>
 

  </b-row>
</b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["cursos"]),
  },
  methods:{
    ...mapActions(["getTotalCursos"]),
  },
  async mounted() {
    await this.getCursos();
  },
}
</script>

