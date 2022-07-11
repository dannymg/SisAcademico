import express from "express";
import alumnoRoutes from './routes/alumno_route.js';
import carreraRoutes from './routes/carrera_route.js';


const app = express();

//Middleware
app.use(express.json());


app.use(alumnoRoutes);
app.use(carreraRoutes);


export default app;