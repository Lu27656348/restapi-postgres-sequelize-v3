import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const revisa_CTG = sequelize.define('revisa_ctg', {
    id_ctg: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    id_tg: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    decision_ctg: {
        type: DataTypes.CHAR,
        defaultValue: null,
        allowNull: true
    },
    comentario: {
        type: DataTypes.TEXT,
        defaultValue: null,
        allowNull: true
    }
},{
    timestamps:false
});