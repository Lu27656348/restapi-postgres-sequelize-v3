import { Jurados } from '../models/Jurados.js'
export const obtenerJurados = async (req,res) => {
    const jurados = await Jurados.findAll();
    res.json(jurados);
};
export const crearJurados = async (req,res) => {
    try {
        const { cedula_profesor, id_tg,tipo } = req.body;
        const nuevo = await Jurados.create({
            cedula_profesor,
            id_tg,
            tipo
        },
        {
            fields: ["cedula_profesor","id_tg","tipo"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de Jurados", error: error.message })
    }
};
export const actualizarJurados = async (req,res) => {
    const {
        cedula_profesor,
        id_tg,
        tipo
    } = req.body;
    const id = req.params.id;
    try {
        const buscar = await Jurados.findOne({
            where: {
                cedula_profesor: cedula_profesor,
                id_tg: id_tg
            }
        });

        buscar.cedula_profesor = cedula_profesor;
        buscar.id_tg = id_tg;
        buscar.tipo = tipo;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Jurados actualizado correctamente", Jurados: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar Jurados", error: error.message});
    }
}

export const eliminarJurados = async (req,res) => {
    const {
        cedula_profesor,
        id_tg
    } = req.body;
    try {
        const eliminar = await Jurados.destroy({
            where: {
                cedula_profesor: cedula_profesor,
                id_tg: id_tg
            }
        });
        res.status(204).json('El Jurados fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Jurados", error: error.message })
    }
}

export const buscarJurados = async (req, res) => {
    const {
        cedula_profesor,
        id_tg
    } = req.body;
    try {
        const buscar = await Jurados.findOne({
            cedula_profesor: cedula_profesor,
            id_tg: id_tg
        });
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Jurados no encontrado");
    }
}

export const buscarJuradosByTG = async (req, res) => {
    const {
        id_tg
    } = req.body;
    try {
        const buscar = await Jurados.findAll({
            where: {
                id_tg: id_tg
            }
        });
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Jurados de trabajo de grado no encontrados");
    }
}