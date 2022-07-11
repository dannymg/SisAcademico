import { sequelize } from '../database/database.js';
import { Alumno } from './Alumno.js';
import { Materia } from './Materia.js';

export const Alumno_Materia = sequelize.define("alumno_materia", {});

Materia.belongsToMany(Alumno, {through: 'alumno_materia', as: 'alumno_id', foreignKey: "cedula"});
Alumno.belongsToMany(Materia, {through: 'alumno_materia', as: 'materia_id', foreignKey: "nombre"});