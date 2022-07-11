import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Alumno = sequelize.define("alumno", {
    cedula:{
        type: DataTypes.STRING(10),
        primaryKey: true
    },
    nombre:{
        type: DataTypes.STRING(50)
    },
    apellido:{
        type: DataTypes.STRING(50)
    },
    ciclo_cursado:{
        type: DataTypes.INTEGER
    }
});

