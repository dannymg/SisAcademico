import { Carrera } from '../models/Carrera.js';
import { Alumno } from '../models/Alumno.js';

export const createCarrera = async (req, res) => {
    const { nombre, descripcion, anios_duracion, grado_titulacion } = req.body;
    try {
        const newCarrera = await Carrera.create({
            nombre: nombre,
            descripcion: descripcion,
            anios_duracion: anios_duracion,
            grado_titulacion: grado_titulacion
        });
        res.json(newCarrera);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


export const getAlumnosCarrera = async (req, res) => {
    try {
        const { nombre } = req.params;
        const alumnos = await Alumno.findAll({
            where:{
                carrera_id: nombre
            }
        });

        if(!alumnos){
            return res.status(404).json({message: "No hay alumnos"});
        }
        res.json(alumnos);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

