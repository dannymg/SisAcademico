import { Materia } from '../models/Materia.js';
import { Alumno_Materia } from '../models/Alumno_Materia.js';


export const getMateriasAlumno = async (req, res) => {
    try {
        const { cedula } = req.params;
        const relacion = await Alumno_Materia.findAll({
            where: {
                cedula: cedula,
            }
        });

        relacion.forEach(async elemento => {
            const materia = await Materia.findAll({
                where: {
                    nombre: elemento.nombre
                }
            });
            res.json(materia);
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}