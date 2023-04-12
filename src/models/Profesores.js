import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { Jurados } from "./Jurados.js";
import { TG } from "./TG.js";

export const Profesores = sequelize.define('profesores', {
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
    experiencia: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    fecha_graduado: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    cargo: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    profesion: {
        type: DataTypes.TEXT,
        allowNull: true
    },
},{
    timestamps:false
});

Profesores.hasOne(TG, {
    foreignKey: 'id_profesor_revisor',
    sourceKey: 'cedula',
    allowNull: true
});

TG.belongsTo(Profesores, {
    foreignKey: 'id_profesor_revisor',
    targetId: 'cedula'
});

Profesores.hasOne(TG, {
    foreignKey: 'id_tutor_academico',
    sourceKey: 'cedula',
    allowNull: true
});

TG.belongsTo(Profesores, {
    foreignKey: 'id_tutor_academico',
    targetId: 'cedula'
});

Profesores.hasOne(Jurados, {
    foreignKey: 'cedula_profesor',
    sourceKey: 'cedula'
});

Jurados.belongsTo(Profesores, {
    foreignKey: 'cedula_profesor',
    targetId: 'cedula'
});