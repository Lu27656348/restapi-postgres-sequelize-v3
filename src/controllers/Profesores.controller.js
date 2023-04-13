import {Profesores} from '../models/Profesores.js'
export const obtenerProfesores = async (req,res) => {
    const profesores = await Profesores.findAll();
    res.json(profesores);
};
export const crearProfesores = async (req,res) => {
    try {
        const { cedula, nombres, apellidos,email,telefono,oficina,habitacion, experiencia, fecha_graduado,cargo,profesion} = req.body;
        const telefono_profesor = (telefono == null || telefono == undefined) ? null : telefono;
        const oficina_profesor = (oficina == null || oficina == undefined) ? null : oficina;
        const habitacion_profesor = (habitacion == null || habitacion == undefined) ? null : habitacion;
        const experiencia_profesor = (experiencia == null || experiencia == undefined) ? null : experiencia;
        const fecha_graduado_profesor = (fecha_graduado == null || fecha_graduado == undefined) ? null : fecha_graduado;
        const cargo_profesor = (cargo == null || cargo == undefined) ? null : cargo;
        const profesion_profesor = (profesion == null || profesion == undefined) ? null : profesion;
        const nuevo = await Profesores.create({
            cedula,
            nombres,
            apellidos,
            email,
            telefono_profesor,
            oficina_profesor,
            habitacion_profesor,
            experiencia_profesor,
            fecha_graduado_profesor,
            cargo_profesor,
            profesion_profesor
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