import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

import { TG } from './TG.js'

export const Externos = sequelize.define('externos', {
    id_externo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
        allowNull: true
    },
    cedula: {
        type: DataTypes.STRING(10),
        allowNull: true
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
    experiencia: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    fecha_graduado: {
        type: DataTypes.DATE,
        allowNull: true
    },
    cargo: {
        type: DataTypes.TEXT,
        allowNull: true
    },
},{
    timestamps:false
});

Externos.hasOne(TG, {
    foreignKey: 'id_tutor_empresarial',
    sourceKey: 'id_externo',
    allowNull: true
});

TG.belongsTo(Externos, {
    foreignKey: 'id_tutor_empresarial',
    targetId: 'id_externo'
});