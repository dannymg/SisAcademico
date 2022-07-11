import { Alumno } from '../models/Alumno.js';

export const getAlumnos = async (req, res) => {
    try {
        const alumnos = await Alumno.findAll();
        res.json(alumnos);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


export const getAlumno = async (req, res) => {
    try {
        const { cedula } = req.params;
        const alumno = await Alumno.findOne({
            where:{
                cedula:cedula
            }
        });

        if(!alumno){
            return res.status(404).json({message: "El alumno no existe"});
        }
        res.json(alumno);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


export const createAlumno = async (req, res) => {
    const { cedula, nombre, apellido, ciclo_cursado , carrera_id} = req.body;

    try {
        const newAlumno = await Alumno.create({
            cedula: cedula,
            nombre: nombre,
            apellido: apellido,
            ciclo_cursado: ciclo_cursado,
            carrera_id: carrera_id
        });``
        res.json(newAlumno);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateAlumno = async (req, res) => {
    try {
        const { cedula } = req.params;
        const { nombre, apellido, ciclo_cursado } = req.body;

        const alumno = await Alumno.findByPk(cedula);
        console.log(alumno);
        alumno.nombre = nombre;
        alumno.apellido = apellido;
        alumno.ciclo_cursado = ciclo_cursado;
    
        await alumno.save();
        res.json(alumno);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteAlumno = async (req, res) => {
    try {
        const { cedula } = req.params;

        await Alumno.destroy({
            where: {
                cedula: cedula
            }
        });
    
        res.sendStatus('204');
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}