import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { Realiza_tg } from './realiza_PT.js'

export const Estudiantes = sequelize.define('estudiantes', {
    cedula: {
        type: DataTypes.STRING(10),
        primaryKey: true
    },
    nombres: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    apellidos: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    telefono: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    oficina: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    habitacion: {
        type: DataTypes.TEXT,
        allowNull: true
    },
},{
    timestamps:false
});

Estudiantes.hasOne(Realiza_tg, {
    foreignKey: 'cedula_estudiante',
    sourceKey: 'cedula'
});

Realiza_tg.belongsTo(Estudiantes, {
    foreignKey: 'cedula_estudiante',
    targetId: 'cedula'
});