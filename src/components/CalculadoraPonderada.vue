<template>
    <div class="calculadora">
        <InputNota v-for="(ponderacion, index) in ponderaciones" :key="index" v-model="notas[index]" :ponderacion="ponderacion">Nota {{ index + 1 }}</InputNota>
        <div class="resultado">
            <span v-if="error"> Input no valido </span>
            <span v-else> Nota final: {{ notaFinal }}</span>
        </div>
    </div>
</template>

<script setup>
    import InputNota from './InputNota.vue'
    import { ref, computed } from 'vue'
    
    let notas = ref([0, 0, 0, 0, 0, 0])
    let ponderaciones = [20, 20, 20, 20, 10, 10]

    let error = computed(() => {
        const regex = /\D/;
        return notas.value.some(nota => nota < 10) || notas.value.some(nota => nota > 70) || notas.value.some(nota => regex.test(nota))
    })





    const notaFinal = computed(() => {
        let suma = 0
        let sumaPonderaciones = 0
        for (let i = 0; i < notas.value.length; i++) {
            suma += notas.value[i] * ponderaciones[i]
            sumaPonderaciones += ponderaciones[i]
        }
        return suma / sumaPonderaciones
    })
</script>

<style>


</style>