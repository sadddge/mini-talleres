<template>
    <div class="input-contenedor">
        <slot></slot>
        <input v-model="nota" type="number" min="10" max="70" maxlength="2">
        <span>{{ ponderacion }}%</span>
    </div>
</template>

<script setup>
    import { defineProps, defineModel } from 'vue'
    defineProps({
        ponderacion: Number
    })

    const nota = defineModel()
</script>

<style lang="scss">
    .input-contenedor {
        display: flex;
        align-items: center;
        gap: 10px;

        span {
            opacity: 0.5;
            user-select: none;
        }
    }
</style>