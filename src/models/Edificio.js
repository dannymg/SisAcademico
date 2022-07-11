import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Edificio = sequelize.define("edificio", {
    numero_bloque:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    descripcion_ubicacion:{
        type: DataTypes.STRING(200)
    },
    estado_instalaciones:{
        type: DataTypes.STRING(15)
    }
});
