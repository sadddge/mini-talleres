<template>
    <div class="input-contenedor">
        <slot></slot>
        <input v-model="nota" min="10" max="70" maxlength="2" placeholder="70">
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

<style lang="scss" scoped>
    .input-contenedor {
        display: flex;
        align-items: center;
        gap: 20px;
        font-size: 1.5em;

        input {
            width: 35px;
            border: none;
            border-bottom: 1px solid black;
            text-align: center;
            font-size: 1em;
            transition: width 0.3s ease;
            &:focus {
                outline: none;
                border-color: blue;
                width: 40px;
            }
        }
        
        span {
            opacity: 0.3;
            user-select: none;
        }
    }
</style>