import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { Edificio } from './Edificio.js';

export const Campus = sequelize.define("campus", {
    codigo_campus:{
        type: DataTypes.STRING(10),
        primaryKey: true
    },
    nombre_campus:{
        type: DataTypes.STRING(40)
    },
    descripcion:{
        type: DataTypes.STRING(200)
    },
    direccion:{
        type: DataTypes.STRING(70)
    }
});

//Relaciones
Campus.hasMany(Edificio, {
    foreignKey: 'campus_id',
    sourceKey: 'codigo_campus'
});

Edificio.belongsTo(Campus, {
    foreignKey: 'campus_id',
    targetId: 'codigo_campus'
});
