import { Router } from "express";
import { createCarrera, getAlumnosCarrera } from '../controllers/carrera_controller.js';


const router = Router();


router.get('/carrera/:nombre', getAlumnosCarrera);
router.post('/carrera/', createCarrera);


export default router;
