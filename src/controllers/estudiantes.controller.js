import {Estudiantes} from '../models/Estudiantes.js'
export const obtenerEstudiantes = async (req,res) => {
    const estudiantes = await Estudiantes.findAll();
    res.json(estudiantes);
};
export const crearEstudiantes = async (req,res) => {
    try {
        const { cedula, nombres, apellidos,email,telefono,oficina,habitacion } = req.body;
        const nuevo = await Estudiantes.create({
            cedula,
            nombres,
            apellidos,
            email,
            telefono,
            oficina,
            habitacion
        },
        {
            fields: ["cedula", "nombres", "apellidos","email","telefono","oficina","habitacion" ]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de estudiante", error: error.message })
    }
};
export const actualizarEstudiantes = async (req,res) => {
    const {
        cedula,
        nombres,
        apellidos,
        email,
        telefono,
        oficina,
        habitacion
    } = req.body;
    const id = req.params.id;
    try {
        const buscar = await Estudiantes.findByPk(id);

        buscar.cedula = cedula;
        buscar.nombres = nombres;
        buscar.apellidos = apellidos;
        buscar.email = email;
        buscar.telefono = telefono;
        buscar.oficina = oficina;
        buscar.habitacion = habitacion;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Estudiante actualizado correctamente", Estudiante: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar estudiante", error: error.message});
    }
}

export const eliminarEstudiantes = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await Estudiantes.destroy({
            where: {
                cedula: id
            }
        });
        res.status(204).json('El estudiante fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de estudiante", error: error.message })
    }
}

export const buscarEstudiante = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await Estudiantes.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Estudiante no encontrado");
    }
}