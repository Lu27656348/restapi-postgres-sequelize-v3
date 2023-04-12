import {CDE} from '../models/CDE.js'
export const obtenerCDE = async (req,res) => {
    const cde = await CDE.findAll();
    res.json(cde);
};
export const crearCDE = async (req,res) => {
    try {
        const { id_cde } = req.body;
        const nuevo = await CDE.create({
            id_cde
        },
        {
            fields: ["id_cde"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de CDE", error: error.message })
    }
};
export const actualizarCDE = async (req,res) => {
    const {
        id_cde, 
        fecha_conformacion
    } = req.body;
    const id = req.params.id;
    try {
        const buscar = await CDE.findByPk(id);

        buscar.id_cde = id_cde;
        buscar.fecha_conformacion = fecha_conformacion;

        const actualizar = await buscar.save();
        
        console.log("Desde controlador ")
        res.json( { mensaje: "CDE actualizado correctamente", CDE: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar CDE", error: error.message});
    }
}

export const eliminarCDE = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await CDE.destroy({
            where: {
                id_cde: id
            }
        });
        res.status(204).json('El CDE fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de CDE", error: error.message })
    }
}

export const buscarCDE = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await CDE.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("CDE no encontrado");
    }
}