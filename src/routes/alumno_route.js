import { Router } from "express";
import { getAlumnos, getAlumno, createAlumno, updateAlumno, deleteAlumno } from '../controllers/alumno_controller.js';


const router = Router();


router.get('/alumno', getAlumnos);
router.get('/alumno/:cedula', getAlumno);
router.post('/alumno', createAlumno);
router.put('/alumno/:cedula', updateAlumno);
router.delete('/alumno/:cedula', deleteAlumno);

export default router;
