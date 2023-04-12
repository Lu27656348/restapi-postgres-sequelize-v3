import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { Especialidades } from "./Especialidades.js";

export const Areas = sequelize.define('areas', {
    nombre_area: {
        type: DataTypes.TEXT,
        primaryKey: true,
    }
},{
    timestamps:false
});

Areas.hasOne(Especialidades, {
    foreignKey: 'nombre_area',
    sourceKey: 'nombre_area',
    allowNull: true
});

Especialidades.belongsTo(Areas, {
    foreignKey: 'nombre_area',
    targetId: 'nombre_area'
});