import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Empresas = sequelize.define('empresas', {
    id_empresa: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    direccion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    telefono: {
        type: DataTypes.TEXT,
        allowNull: true
    }
},{
    timestamps:false
});