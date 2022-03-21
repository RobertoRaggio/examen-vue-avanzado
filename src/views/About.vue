<template>
  <div >
     <b-container class="">
     
    <div class ="mt-4">
      <h1>Editando el curso: CSS para principiantes</h1>
      <section>
        <div class="m-3">
          <label>Nombre</label>
            <input placeholder="CSS para principiantes" />
        </div>

         <div class="m-3"> 
          <label>Url imagen del curso:</label>
            <input
            placeholder="https://rolandocaldas.com/wp-content/uploads/2013/05/css3.png"
          />
        </div>

         <div class="m-3">
          <label>Cupos totales del curso:</label>
          <input placeholder="35" />
        </div>

         <div class="m-3">
          <label>Inscritos en el curso:</label>
           <input placeholder="25" />
        </div>

        <div class="m-3">
          <label>Duración del curso:</label>
           <input placeholder="1 mes" />
        </div>

        <div class="m-3">
          <label>Costo total curso:</label>
           <input placeholder="$10,000" />
        </div>

         <div class="m-3">
          <label>Código del curso:</label>
            <input placeholder="CSS-G12" />
        </div>

         <div class="m-3">
          <label>Descripción del curso:</label>
              <b-form-textarea id="textarea-rows" placeholder="Aprendiendo estilos con css desde el nivel más básico" rows="8">
              </b-form-textarea>
        </div>

           <div class="m-3">
          <label>Fecha del Regristro:</label>
            <input  placeholder="06-03-2021" />
        </div>

        <div class="m-3">
           
          <h4>Termiando: No</h4>
        </div>
         
      </section>
    
     

    <b-button class="m-3" variant="success">Iniciar</b-button>
     <b-button class="m-3" variant="danger">Limpiar Formulario</b-button>
     <b-button class="m-3" variant="warning">Limpiar Validación</b-button>
    </div>
    </b-container>
  </div>
</template>

<style scoped>
input{
  border:none; 
  }
section {
  text-align: left;
}
</style>