import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Jurados = sequelize.define('jurados', {
    cedula_profesor: {
        type: DataTypes.STRING(10),
        primaryKey: true,
    },
    id_tg: {
        type: DataTypes.TEXT,
        primaryKey: true,
    },
    fecha_designacion: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: new Date()
    },
    tipo: {
        type: DataTypes.CHAR,
        allowNull: false,
        defaultValue: 'J'
    },
},{
    timestamps:false
});