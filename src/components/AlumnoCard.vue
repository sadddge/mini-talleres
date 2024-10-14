<template>
    <div class="alumno-card">
        <div>{{ alumno.nombre }}</div>
        <div>{{ alumno.nivel }}</div>
        <div>{{ alumno.notas }}</div>
        <div>{{ notaFinal }}</div>
    </div>
</template>

<script setup>
    import { defineProps, computed } from 'vue'
    const props = defineProps(['alumno'])

    const ponderaciones = [20, 20, 20, 20, 10, 10]

    const notaFinal = computed(() => {
        let suma = 0
        let sumaPonderaciones = 0
        for (let i = 0; i < props.alumno.notas.length; i++) {
            suma += props.alumno.notas[i] * ponderaciones[i]
            sumaPonderaciones += ponderaciones[i]
        }
        return suma / sumaPonderaciones
    })
</script>

<style lang="scss">
    .alumno-card {
        display: flex;
        width: fit-content;
        align-items: center;

        div {
            padding: 5px;
            border: solid 1px black;
            text-align: center;
        }
    }
</style>