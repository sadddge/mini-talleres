<template>
    <div class="alumno-form">
        <div class="input">
            <input type="text" placeholder="Nombre" v-model="nombre" @blur="validate" :class="{ 'input-error' : isNombreEmpty }">
            <input class="number" placeholder="Nivel" v-model="nivel" @blur="validate" :class="{ 'input-error' : isNivelEmpty }">
        </div>
        <button @click="guardar">Guardar</button>
    </div>
</template>

<script setup>
    import { defineEmits, ref } from 'vue';
    const emits = defineEmits(['guardar']);

    const nombre = ref('');
    const nivel = ref('');

    const guardar = () => {
        validate();
        if (!isNombreEmpty.value && !isNivelEmpty.value) {
            emits('guardar', {
            nombre: nombre.value,
            nivel: nivel.value
            });
        }
    }

    const isNombreEmpty = ref(false);
    const isNivelEmpty = ref(false);

    const validate = () => {
        const regex = /\D/;
        isNombreEmpty.value = nombre.value === '';
        isNivelEmpty.value = nivel.value === '' || regex.test(nivel.value);
    }

</script>

<style scoped lang="scss">
    .input-error {
        border-color: red;
    }

    .alumno-form {
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;
    }

    .input {
        display: flex;
        gap: 10px;
        .number {
            width: 35px;
            text-align: center;
        }
    }

    input {
        padding: 5px;
        border: none;
        border-bottom: solid 1px black;

        [type="text"] {
            width: 200px;
            text-align: center;
        }

        &:focus {
            outline: none;
            border-color: blue;
        }
    }
    button {
        width: 100px;
        height: 30px;
        padding: 5px;
        border: none;
        border-radius: 15px;
        color : white;
        background-color: gray;

        &:hover {
            background-color: darkgray;
        }

        &:active {
            background-color: black;
        }
    }
</style>