<template>
    <div class="alumno-card">
        <div class="nombre">{{ alumno.nombre }}</div>
        <div class="nivel">{{ alumno.nivel }}</div>
        <div class="notas">{{ alumno.notas }}</div>
        <div class="promedio">{{ notaFinal }}</div>
    </div>
</template>

<script setup>
    import { defineProps, computed } from 'vue'
    const props = defineProps(['alumno'])

    const ponderaciones = [20, 20, 20, 20, 10, 10]

    const notaFinal = computed(() => {
        let suma = 0
        for (let i = 0; i < props.alumno.notas.length; i++) {
            suma += props.alumno.notas[i] * (ponderaciones[i] / 100)
        }
        return suma.toFixed(1)
    })
</script>

<style lang="scss" scoped>
    .alumno-card {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0;

        div {
            padding: 5px;
            border: solid 1px black;
            text-align: center;
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
    }

</style>