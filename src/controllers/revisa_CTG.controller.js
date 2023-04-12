import {revisa_CTG} from '../models/revisa_CTG.js';
import { TG } from '../models/TG.js';
export const obtenerrevisa_CTG = async (req,res) => {
    const revisa_ctg = await revisa_CTG.findAll();
    res.json(revisa_ctg);
};
export const crearrevisa_CTG = async (req,res) => {


    try {
        const { id_ctg,id_tg,decision_ctg,comentario } = req.body;
        
        if(decision_ctg == 'A'){
            const buscar = await TG.findOne({
                where: {
                    id_tg: id_tg
                }
            });
            console.log(buscar)
            buscar.estatus = "PR";
    
           await buscar.save();
        }else{
            const buscar = await TG.findOne({
                where: {
                    id_tg: id_tg
                }
            });
            console.log(buscar)
            buscar.estatus = "R";
    
           await buscar.save();
        }

        const nuevo = await revisa_CTG.create({
            id_ctg,
            id_tg,
            decision_ctg,
            comentario
        },
        {
            fields: ["id_ctg","id_tg","decision_ctg","comentario"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de revisa_CTG", error: error.message})
    }
};
export const actualizarrevisa_CTG = async (req,res) => {
    const {
        id_ctg,
        id_tg,
        decision_ctg,
        comentario
    } = req.body;
    try {
        const buscar = await revisa_CTG.findOne({
            where: {
                id_ctg: id_ctg,
                id_tg: id_tg
            }
        });

        buscar.decision_ctg = decision_ctg;
        buscar.comentario = comentario;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "revisa_CTG actualizado correctamente", revisa_CTG: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar revisa_CTG", error: error.message});
    }
}

export const eliminarrevisa_CTG = async (req,res) => {
    const {
        id_ctg,
        id_tg
    } = req.body;
    try {
        const eliminar = await revisa_CTG.destroy({
            where: {
                id_ctg: id_ctg,
                id_tg: id_tg
            }
        });
        res.status(204).json('El revisa_CTG fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de revisa_CTG", error: error.message })
    }
}

export const buscarrevisa_CTG = async (req, res) => {
    const {
        id_ctg,
        id_tg
    } = req.body;
    try {
        const buscar = await revisa_CTG.findOne({
            where: {
                id_ctg: id_ctg,
                id_tg: id_tg
            }
        });
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("revisa_CTG no encontrado");
    }
}