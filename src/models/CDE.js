import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const CDE = sequelize.define('cde', {
    id_cde: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    id_cde_formateado: {
        type: DataTypes.TEXT,
        defaultValue: null,
        allowNull: true
    },
    fecha_conformacion: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    }
},{
    timestamps:false
});