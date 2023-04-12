import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Especialidades = sequelize.define('especialidades', {
    nombre_especialidad: {
        type: DataTypes.TEXT,
        primaryKey: true,
    },
    nombre_area: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    }
},{
    timestamps:false
});