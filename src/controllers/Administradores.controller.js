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

export const crearAdministradores = async (req,res) => {
    const { cedula, nombres,apellidos,password } = req.body;
    const administrador = await Administradores.create({
        cedula_administrador: cedula,
        nombres: nombres,
        apellidos: apellidos,
        contrasena: password
    },{
        fields: ["cedula_administrador","nombres","apellidos","contrasena"]
    });
    res.json(administrador);
};
export const actualizarAdministradores = async (req,res) => {
    const { cedula, nombres,apellidos,password } = req.body;
    const administrador = await Administradores.findOne({
        where: {
            id_usuario: id_usuario
        }
    });
    administrador.cedula_administrador = cedula;
    administrador.nombres = nombres;
    administrador.apellidos = apellidos;
    administrador.contrasena = password;
    const actualizar = await administrador.save();
    res.json( { mensaje: "Administrador actualizado correctamente", Administrador: buscar });
};

export const verificarContrasena = async (req,res) => {
    const { cedula, contrasena } = req.body;
    const administrador = await Administradores.findOne({
        where: {
            cedula_administrador: cedula
        }
    });
};

