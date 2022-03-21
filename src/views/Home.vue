<template>
<div>
<div class="container mt-4">
  <div class="row">
<div div class="col-lg-4 col-md-6 col-sm-12 mb-3 foto1">
    <b-card
      no-body
      img-src="https://rosolutions.com.mx/blog/wp-content/uploads/2018/11/es6.jpeg" 
      img-alt="Image"
      img-
    >
      <template #header>
        <h4 class="mb-0">JavaScript Avanzado</h4>
      </template>

      <b-card-body>
        <b-card-title>Información</b-card-title>
      </b-card-body>

        <b-list-group-item>Costo: $30,000 <p>Duración: 2 semanas</p></b-list-group-item>
        <b-list-group-item>Cupos: 20 <p>Completado: No</p></b-list-group-item>
        <b-list-group-item>Fechas de Registro: <p>06-03-2021</p></b-list-group-item>
        <b-list-group-item>Descripción: <p>Curso con las nuevas actualizaciones de JavaScript</p></b-list-group-item>

    </b-card>
  </div>
   <div div class="col-lg-4 col-md-6 col-sm-12 mb-3 ms-2 foto2">
    <b-card
      no-body
      img-src="https://rolandocaldas.com/wp-content/uploads/2013/05/css3.png"
      img-alt="Image"
      img-top
    >
      <template #header>
        <h4 class="mb-0">CSS para principiantes</h4>
      </template>

      <b-card-body>
        <b-card-title>Información</b-card-title>
      </b-card-body>

        <b-list-group-item>Costo: $10,000 <p>Duración: 1 mes</p></b-list-group-item>
        <b-list-group-item>Cupos: 35 <p>Completado: No</p></b-list-group-item>
        <b-list-group-item>Fechas de Registro: <p>05-03-2021</p></b-list-group-item>
        <b-list-group-item>Descripción: <p>Aprendiendo estilos con css desde el nivel más básico</p></b-list-group-item>

    </b-card>
  </div>
   <div div class="col-lg-4 col-md-6 col-sm-12 mb-3">
    <b-card
    class="foto3 rounded mx-auto d-block"
      no-body
      img-src="https://opencode.us/wp-content/uploads/2013/10/javascript_logo.png"
      img-top
    >
      <template #header>
        <h4 class="mb-0">JavaScript básico de 0 a 100</h4>
      </template>

      <b-card-body>
        <b-card-title>Información</b-card-title>
      </b-card-body>

        <b-list-group-item>Costo: $20,000 <p>Duración: 2 meses</p></b-list-group-item>
        <b-list-group-item>Cupos: 25 <p>Completado: Si</p></b-list-group-item>
        <b-list-group-item>Fechas de Registro: <p>05-03-2021</p></b-list-group-item>
        <b-list-group-item>Descripción: <p>Progamando para la web con Javascript</p></b-list-group-item>

    </b-card>
  </div>
  </div>
    
</div>
</div>


</template>

<style >
.foto1 img {
  width: 100%;
  height: 200px;
}
.foto2 img {
  width: 100%;
  height: 200px;

}
.foto3 img {
  
  width: 50%;
  height: 200px;
}
</style>