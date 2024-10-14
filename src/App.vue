<template>
  <div class="contenedor">
    <AlumnosTabla :alumnoService="service"/>
    <CalculadoraPonderada @update:notas="guardarNotas"/>
    <AlmunoForm @guardar="guardarAlumno" class="form"/>
  </div>
  
</template>

<script setup>
  import CalculadoraPonderada from './components/CalculadoraPonderada.vue'
  import AlmunoForm from './components/AlmunoForm.vue';
  import AlumnosTabla from './components/AlumnosTabla.vue'
  import AlumnoService from './services/AlumnosService';

  let service = new AlumnoService();

  let notasAlumno = [];

  const guardarNotas = (notas) => {
    notasAlumno = notas;
  }
  
  const guardarAlumno = (alumno) => {
    if (notasAlumno.length < 6) {
      alert('Ingrese todas las notas');
      return;
    }

    const newAlumno = {
      nombre: alumno.nombre,
      nivel: alumno.nivel,
      notas: notasAlumno.map(nota => parseInt(nota))
    }
    service.postAlumno(newAlumno);
  }


</script>

<style lang="scss">
  * {
    font-family: 'Verdana';
  }

  .contenedor {
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 150px;
    justify-content: space-evenly;
  }

  .form {
    margin-top: 100px;
  }
</style>
