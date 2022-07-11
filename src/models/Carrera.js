import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { Edificio } from './Edificio.js';
import { Alumno } from './Alumno.js';


export const Carrera = sequelize.define("carrera", {
    nombre:{
        type: DataTypes.STRING(100),
        primaryKey: true
    },
    descripcion:{
        type: DataTypes.STRING(200)
    },
    anios_duracion:{
        type: DataTypes.INTEGER
    },
    grado_titulacion:{
        type: DataTypes.STRING(25)
    }
});

//Relaciones
Carrera.hasMany(Edificio, {
    foreignKey: 'carrera_id',
    sourceKey: 'nombre'
});

Edificio.belongsTo(Carrera, {
    foreignKey: 'carrera_id',
    targetId: 'nombre'
});


Carrera.hasMany(Alumno, {
    foreignKey: 'carrera_id',
    sourceKey: 'nombre'
});

Alumno.belongsTo(Carrera, {
    foreignKey: 'carrera_id',
    targetId: 'nombre'
});

