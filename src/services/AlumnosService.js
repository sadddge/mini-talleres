
import axios from 'axios';
import { ref } from 'vue';

class AlumnoService {

    constructor() {
        this.alumnos = ref([]);
    }

    addAlumno(alumno) {
        this.alumnos.value.push(alumno);
    }

    getAlumnos() {
        return this.alumnos;
    }

    getAlumnoByNombre(nombre) {
        return this.alumnos.value.find(alumno => alumno.nombre === nombre);
    }

    getAlumnosByNivel(nivel) {
        return this.alumnos.value.filter(alumno => alumno.nivel === nivel);
    }

    getNotaByAlumno(nombre) {
        const alumno = this.getAlumnoByNombre(nombre);
        return alumno ? alumno.nota : null;
    }

    getPromedioByAlumno(nombre) {
        const alumno = this.getAlumnoByNombre(nombre);
        return alumno && alumno.notas.length > 0
            ? alumno.notas.reduce((acc, nota) => acc + nota) / alumno.notas.length
            : null;
    }

    getAlumnosByAprobado() {
        return this.alumnos.value.filter(alumno => this.getPromedioByAlumno(alumno.nombre) >= 40);
    }

    async postAlumno(alumno) {
        try {
            const url = 'http://localhost:3000/alumnos';
            const response = await axios.post(url, alumno);
            this.addAlumno(response.data);
        } catch (error) {
            console.error('Error al añadir un alumno:', error);
        }
    }

    async fetchAlumnos() {
        try {
            const url = 'http://localhost:3000/alumnos';
            const response = await axios.get(url);
            this.alumnos.value = response.data;
        } catch (error) {
            console.error('Error al obtener los alumnos:', error);
        }
    }
}

export default AlumnoService;
