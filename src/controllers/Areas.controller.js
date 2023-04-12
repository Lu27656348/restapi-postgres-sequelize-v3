import {Areas} from '../models/Areas.js'
export const obtenerAreas = async (req,res) => {
    const Areas = await Areas.findAll();
    res.json(Areas);
};
export const crearAreas = async (req,res) => {
    try {
        const { nombre_area } = req.body;
        const nuevo = await Areas.create({
            nombre_area
        },
        {
            fields: ["nombre_area"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de Areas", error: error.message })
    }
};
export const actualizarAreas = async (req,res) => {
    const {
        nombre_area
    } = req.body;
    const id = req.params.id;
    try {
        const buscar = await Areas.findByPk(id);

        buscar.nombre_area = nombre_area;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Areas actualizado correctamente", Areas: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar Areas", error: error.message});
    }
}

export const eliminarAreas = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await Areas.destroy({
            where: {
                nombre_area: id
            }
        });
        res.status(204).json('El Areas fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Areas", error: error.message })
    }
}

export const buscarAreas = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await Areas.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Areas no encontrado");
    }
}