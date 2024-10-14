<template>
    <div class="tabla">
        <div class="labels">
            <div class="nombre">Nombre</div>
            <div class="nivel">Nivel</div>
            <div class="notas">Notas</div>
            <div class="promedio">Nota Final</div>
        </div>
        <div class="alumnos">
            <AlumnoCard v-for="(alumno, index) in alumnos" :key="index" :alumno="alumno"></AlumnoCard>
        </div>
    </div>
</template>

<script setup>
    import AlumnoCard from './AlumnoCard.vue'
    import AlumnosService from '../services/AlumnosService.js'
    import { onMounted, defineProps } from 'vue'

    const props = defineProps({
        alumnoService : {
            type: AlumnosService,
            required: true
        }
    })

    let alumnos = props.alumnoService.getAlumnos()

    onMounted(async () => {
        await props.alumnoService.fetchAlumnos()
    })

</script>

<style lang="scss">

    .tabla {
        display: flex;
        flex-direction: column;
        gap: 0;
        padding: 5px;
        font-weight: bold;
    }

    .nombre {
        width: 200px;
    }

    .nivel {
        width: 50px;
    }

    .notas {
        width: 250px;
    }
    .promedio {
        width: 50px;
    }

    .labels {
        display: flex;
        width: 100%;
        flex-direction: row;
        gap: 0;
        div {
            padding: 5px;
            border: solid 1px black;
            text-align: center;
        }
    }

    .alumnos {
        display: flex;
        flex-direction: column;
    }
</style>