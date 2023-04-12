import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const CTG = sequelize.define('ctg', {
    id_ctg: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_ctg_formateado: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null
    },
    fecha_conformacion: {
        type: DataTypes.DATE,
        defaultValue: null,
        allowNull: true
    },
    resumen_ctg: {
        type: DataTypes.TEXT,
        defaultValue: null,
        allowNull: true
    }
},{
    timestamps:false
});