import {Empresas} from '../models/Empresas.js'
export const obtenerEmpresas = async (req,res) => {
    const empresas = await Empresas.findAll();
    res.json(empresas);
};
export const crearEmpresas = async (req,res) => {
    try {
        const { nombre, direccion ,telefono } = req.body;
        const nuevo = await Empresas.create({
            nombre,
            direccion,
            telefono
        },
        {
            fields: ["nombre", "direccion" ,"telefono"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de Empresas", error: error.message })
    }
};
export const actualizarEmpresas = async (req,res) => {
    const {
        nombre, 
        direccion,
        telefono
    } = req.body;
    const id = req.params.id;
    try {
        const buscar = await Empresas.findByPk(id);

        buscar.nombre = nombre;
        buscar.direccion = direccion;
        buscar.telefono = telefono;

        const actualizar = await buscar.save();
        
        res.json( { mensaje: "Empresas actualizado correctamente", Empresas: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar Empresas", error: error.message});
    }
}

export const eliminarEmpresas = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await Empresas.destroy({
            where: {
                id_empresa: id
            }
        });
        res.status(204).json('El Empresas fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de Empresas", error: error.message })
    }
}

export const buscarEmpresas = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await Empresas.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Empresas no encontrado");
    }
}