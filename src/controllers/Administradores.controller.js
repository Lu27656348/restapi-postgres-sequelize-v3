import { Administradores } from '../models/Administradores.js';
import { QueryTypes } from 'sequelize'
import { sequelize } from '../database/database.js';
export const buscarAdministradores = async (req,res) => {
    const { cedula, contrasena } = req.body;
    console.log("cedula");
    console.log(cedula)
    console.log("contrasena");
    console.log(contrasena)
    const administrador = await Administradores.findOne({
        where: {
            cedula_administrador: cedula,
            contrasena: contrasena
        }
    });
    res.json(administrador);
};

export const verificarContrasena = async (req,res) => {
    const { cedula, contrasena } = req.body;
    const administrador = await Administradores.findOne({
        where: {
            cedula_administrador: cedula
        }
    });
};

