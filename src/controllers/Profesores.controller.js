import {Profesores} from '../models/Profesores.js'
export const obtenerProfesores = async (req,res) => {
    const profesores = await Profesores.findAll();
    res.json(profesores);
};
export const crearProfesores = async (req,res) => {
    try {
        const { cedula, nombres, apellidos,email,telefono,oficina,habitacion, experiencia, fecha_graduado,cargo,profesion} = req.body;
        const nuevo = await Profesores.create({
            cedula,
            nombres,
            apellidos,
            email,
            telefono,
            oficina,
            habitacion,
            experiencia,
            fecha_graduado,
            cargo,
            profesion
        },
        {
            fields: ["cedula", "nombres", "apellidos","email","telefono","oficina","habitacion","experiencia", "fecha_graduado","cargo","profesion"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de profesor", error: error.message })
    }
};
export const actualizarProfesores = async (req,res) => {
    const {
        cedula,
        nombres,
        apellidos,
        email,
        telefono,
        oficina,
        habitacion,
        experiencia,
        fecha_graduado,
        cargo,
        profesion
    } = req.body;
    const id = req.params.id;
    try {
        const buscar = await Profesores.findByPk(id);

        buscar.cedula = cedula;
        buscar.nombres = nombres;
        buscar.apellidos = apellidos;
        buscar.email = email;
        buscar.telefono = telefono;
        buscar.oficina = oficina;
        buscar.habitacion = habitacion;
        buscar.experiencia = experiencia;
        buscar.fecha_graduado = fecha_graduado;
        buscar.cargo = cargo;
        buscar.profesion = profesion;
        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Profesor actualizado correctamente", Profesor: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar Profesor", error: error.message});
    }
}

export const eliminarProfesores = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await Profesores.destroy({
            where: {
                cedula: id
            }
        });
        res.status(204).json('El Profesor fue eliminado con exito ');
    } catch (error) {
        res.status(500).json( { mensaje: "Error en eliminación de Profesor", error: error.message })
    }
}

export const buscarProfesor = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await Profesores.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json({mensaje: "Profesor no encontrado", error: error.message});
    }
}