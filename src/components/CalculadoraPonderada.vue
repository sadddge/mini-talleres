<template>
    <div class="calculadora">
        <InputNota v-for="(ponderacion, index) in ponderaciones" :key="index" v-model="notas[index]" :ponderacion="ponderacion">Nota {{ index + 1 }}</InputNota>
        <div class="resultado">
            <span v-if="hasLetters"> Input no valido, Ingrese solo numeros </span>
            <span v-else-if="hasInvalidValues"> Input no valido, Ingrese numeros entre 10 y 70 </span>
            <span v-else> Nota final: {{ notaFinal }}</span>
        </div>
    </div>
</template>

<script setup>
    import InputNota from './InputNota.vue'
    import { ref, defineEmits ,computed, watch } from 'vue'
    
    const emits = defineEmits(['update:notas'])

    let notas = ref([])
    let ponderaciones = [20, 20, 20, 20, 10, 10]

    const updateNotas = () => {
        emits('update:notas', notas.value)
    }

    watch(notas, updateNotas, { deep: true })

    let hasLetters = computed(() => {
        const regex = /\D/;
        return notas.value.some(nota => regex.test(nota))
    })

    let hasInvalidValues = computed(() => {
        return notas.value.some(nota => nota < 10 || nota > 70)
    })

    const notaFinal = computed(() => {
        let suma = 0
        for (let i = 0; i < notas.value.length; i++) {
            suma += notas.value[i] * (ponderaciones[i] / 100)
        }
        return (suma).toFixed(1)
    })
</script>

<style scoped lang="scss">
    .calculadora {
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
    }

    .resultado {
        font-size: 1.5em;
        margin-top: 20px;
    }

</style>