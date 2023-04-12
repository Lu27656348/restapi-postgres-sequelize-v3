import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Administradores = sequelize.define('administradores', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    cedula_administrador: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    nombres: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    apellidos: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    contrasena: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
},{
    timestamps:false
});