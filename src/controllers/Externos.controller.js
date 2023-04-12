import {Externos} from '../models/Externos.js'
export const obtenerExternos = async (req,res) => {
    const externos = await Externos.findAll();
    res.json(externos);
};
export const crearExternos = async (req,res) => {
    try {
        const { cedula, nombres, apellidos,email,telefono,oficina,habitacion, experiencia, fecha_graduado,cargo} = req.body;
        const nuevo = await Externos.create({
            cedula,
            nombres,
            apellidos,
            email,
            telefono,
            oficina,
            habitacion,
            experiencia,
            fecha_graduado,
            cargo
        },
        {
            fields: ["cedula", "nombres", "apellidos","email","telefono","oficina","habitacion","experiencia", "fecha_graduado","cargo"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de Externo", error: error.message })
    }
};
export const actualizarExternos = async (req,res) => {
    const {
        cedula,
        nombres,
        apellidos,
        email,
        telefono,
        oficina,
        habitacion,
        experiencia,
        graduado,
        cargo
    } = req.body;
    const id = req.params.id;
    try {
        const buscar = await Externos.findByPk(id);

        buscar.cedula = cedula;
        buscar.nombres = nombres;
        buscar.apellidos = apellidos;
        buscar.email = email;
        buscar.telefono = telefono;
        buscar.oficina = oficina;
        buscar.habitacion = habitacion;
        buscar.experiencia = experiencia;
        buscar.graduado = graduado;
        buscar.cargo = cargo;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Externo actualizado correctamente", Externo: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar Externo", error: error.message});
    }
}

export const eliminarExternos = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await Externos.destroy({
            where: {
                id_externo: id
            }
        });
        res.status(204).json('El Externo fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Externo", error: error.message })
    }
}

export const buscarExterno = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await Externos.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Externo no encontrado");
    }
}

export const buscarExternoByCedula = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await Externos.findOne({
            where: {
                cedula: id
            }
        });
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Externo no encontrado");
    }
}