import { Especialidades } from '../models/Especialidades.js'
export const obtenerEspecialidades = async (req,res) => {
    const Especialidades = await Especialidades.findAll();
    res.json(Especialidades);
};
export const crearEspecialidades = async (req,res) => {
    try {
        const { nombre_especialidad, nombre_area } = req.body;
        const nuevo = await TG.create({
            nombre_especialidad,
            nombre_area
        },
        {
            fields: ["nombre_especialidad","nombre_area"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de Especialidades", error: error.message })
    }
};
export const actualizarEspecialidades = async (req,res) => {
    const {
        nombre_especialidad,
        nombre_area,
    } = req.body;
    const id = req.params.id;
    try {
        const buscar = await Especialidades.findByPk(id);

        buscar.nombre_especialidad = nombre_especialidad;
        buscar.nombre_area = nombre_area;
        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Especialidades actualizado correctamente", Especialidades: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar Especialidades", error: error.message});
    }
}

export const eliminarEspecialidades = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await Especialidades.destroy({
            where: {
                nombre_especialidad: id
            }
        });
        res.status(204).json('El Especialidades fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Especialidades", error: error.message })
    }
}

export const buscarEspecialidades = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await Especialidades.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Especialidades no encontrado");
    }
}