import { sequelize } from '../database/database.js';
import { Profesor } from './Profesor.js';
import { Materia } from './Materia.js';

export const Profesor_Materia = sequelize.define("profesor_materia", {});

Materia.belongsToMany(Profesor, {through: 'profesor_materia', as: 'profesor_id', foreignKey: "cedula"});
Profesor.belongsToMany(Materia, {through: 'profesor_materia', as: 'materia_id', foreignKey: "nombre"});