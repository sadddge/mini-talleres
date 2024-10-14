<template>
    <AlumnoCard v-for="(alumno, index) in alumnos" :key="index" :alumno="alumno"></AlumnoCard>
</template>

<script setup>
    import AlumnoCard from './AlumnoCard.vue'
    import AlumnosService from '../services/AlumnosService.js'
    import { onMounted } from 'vue'

    const alumnosService = new AlumnosService()
    const alumnos = alumnosService.getAlumnos()

    onMounted(async () => {
        await alumnosService.fetchAlumnos()
    })

</script>

<style>
</style>