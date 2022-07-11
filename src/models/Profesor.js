import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Profesor = sequelize.define("profesor", {
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
    titulo:{
        type: DataTypes.STRING(90)
    }
});
