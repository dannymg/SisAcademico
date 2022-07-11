import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';


export const Materia = sequelize.define("materia", {
    nombre:{
        type: DataTypes.STRING(45),
        primaryKey: true
    },
    ciclo_definido:{
        type: DataTypes.INTEGER
    },
    unidades:{
        type: DataTypes.INTEGER
    },
    aporte_profesional:{
        type: DataTypes.STRING(10)
    }
});