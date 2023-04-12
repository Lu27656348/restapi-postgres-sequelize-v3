import { Realiza_tg } from '../models/realiza_PT.js';
import { TG } from '../models/TG.js';
export const obtenerRealiza_tg = async (req,res) => {
    const Realiza_tg = await Realiza_tg.findAll();
    res.json(Realiza_tg);
};
export const crearRealiza_tg = async (req,res) => {
    try {
        const { cedula_estudiante, id_tg } = req.body;
        const nuevo = await Realiza_tg.create({
            cedula_estudiante,
            id_tg
        },
        {
            fields: ["cedula_estudiante","id_tg"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de Realiza_tg", error: error.message })
    }
};
export const actualizarRealiza_tg = async (req,res) => {
    const { cedula_estudiante, id_tg } = req.body;
    const id = req.params.id;
    try {
        const buscar = await Realiza_tg.findOne({
            where: {
                cedula_estudiante: cedula_estudiante,
                id_tg: id_tg
            }
        });

        buscar.cedula_estudiante = cedula_estudiante;
        buscar.id_tg = id_tg;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Realiza_tg actualizado correctamente", Realiza_tg: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar Realiza_tg", error: error.message});
    }
}

export const eliminarRealiza_tg = async (req,res) => {
    const { cedula_estudiante, id_tg } = req.body;
    try {
        const eliminar = await Realiza_tg.destroy({
            where: {
                cedula_estudiante: cedula_estudiante,
                id_tg: id_tg
            }
        });
        res.status(204).json('El Realiza_tg fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Realiza_tg", error: error.message })
    }
}

export const buscarRealiza_tg = async (req, res) => {
    const { cedula_estudiante, id_tg } = req.body;
    try {
        const buscar = await Realiza_tg.findOne({
            cedula_estudiante: cedula_estudiante,
            id_tg: id_tg
        });
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Realiza_tg no encontrado");
    }
}

export const entregaInforme = async (req, res) => {
    const { cedula_estudiante, id_tg, fecha_entrega_informe} = req.body;
    try {
        const buscar = await Realiza_tg.findOne({
            cedula_estudiante: cedula_estudiante,
            id_tg: id_tg
        });

        buscar.fecha_entrega_informe = fecha_entrega_informe;
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Error en entrega de informe");
    }
}