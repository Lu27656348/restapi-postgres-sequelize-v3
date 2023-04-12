import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
export const Planillas = sequelize.define('planillas', {
    id_tg: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nombre_planilla: {
        type: DataTypes.TEXT,
        primaryKey: true
    },
    documento: {
        type: DataTypes.BLOB,
        allowNull: false
    }
},{
    timestamps: false
})