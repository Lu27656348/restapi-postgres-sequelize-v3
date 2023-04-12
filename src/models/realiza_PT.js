import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Realiza_tg = sequelize.define('realiza_tg', {
    cedula_estudiante: {
        type: DataTypes.STRING(10),
        primaryKey: true,
    },
    id_tg: {
        type: DataTypes.TEXT,
        primaryKey: true,
    },
    nota: {
        type: DataTypes.INTEGER,
        defaultValue: null,
        allowNull: true
    }
},{
    timestamps:false
});