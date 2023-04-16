import { Administradores } from '../models/Administradores.js';
import { QueryTypes } from 'sequelize'
import { sequelize } from '../database/database.js';
export const obtenerAdministradores = async (req,res) => {
    const administradores = await Administradores.findAll();
    res.json(administradores);
};
export const obtenerAdministradoresSinProfesor = async (req,res) => {
    const buscar = await sequelize.query("SELECT A.* FROM Administradores AS A LEFT JOIN Profesores AS P ON A.cedula_administrador = P.cedula WHERE P.cedula IS NULL", { type: QueryTypes.SELECT});
    res.json(buscar);
};

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
    const { cedula_administrador, nombres,apellidos,contrasena } = req.body;
    const administrador = await Administradores.create({
        cedula_administrador: cedula_administrador,
        nombres: nombres,
        apellidos: apellidos,
        contrasena: contrasena
    },{
        fields: ["cedula_administrador","nombres","apellidos","contrasena"]
    });
    res.json(administrador);
};
export const actualizarAdministradores = async (req,res) => {
    const { id_usuario,cedula_administrador, nombres,apellidos,contrasena } = req.body;
    const administrador = await Administradores.findOne({
        where: {
            id_usuario: id_usuario
        }
    });
    administrador.cedula_administrador = cedula_administrador;
    administrador.nombres = nombres;
    administrador.apellidos = apellidos;
    administrador.contrasena = contrasena;
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

