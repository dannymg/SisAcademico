import express from "express";
import alumnoRoutes from "./routes/alumno_route.js";
import carreraRoutes from "./routes/carrera_route.js";
import cors from "cors";

const app = express();

//Middleware
app.use(express.json());

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.use(alumnoRoutes);
app.use(carreraRoutes);

export default app;
