import {CTG} from '../models/CTG.js'
export const obtenerCTG = async (req,res) => {
    const ctg = await CTG.findAll();
    res.json(ctg);
};
export const crearCTG = async (req,res) => {
    try {
        const { id_ctg,fecha_conformacion,resumen_ctg } = req.body;
        const nuevo = await CTG.create({
            id_ctg,
            fecha_conformacion,
            resumen_ctg
        },
        {
            fields: ["id_ctg","fecha_conformacion","resumen_ctg"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de CTG", error: error.message })
    }
};
export const actualizarCTG = async (req,res) => {
    const {
        fecha_conformacion, 
        resumen_ctg,
    } = req.body;
    const id = req.params.id;
    try {
        const buscar = await CTG.findByPk(id);

        buscar.fecha_conformacion = fecha_conformacion;
        buscar.resumen_ctg = resumen_ctg;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "CTG actualizado correctamente", CTG: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar CTG", error: error.message});
    }
}

export const eliminarCTG = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await CTG.destroy({
            where: {
                id_ctg: id
            }
        });
        res.status(204).json('El CTG fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de CTG", error: error.message })
    }
}

export const buscarCTG = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await CTG.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("CTG no encontrado");
    }
}