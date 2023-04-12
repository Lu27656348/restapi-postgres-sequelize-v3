import { TG } from '../models/TG.js';
import { Op, Sequelize, QueryTypes } from 'sequelize'

import { Realiza_tg } from '../models/realiza_PT.js';
import { Estudiantes } from '../models/Estudiantes.js';
import { Planillas } from '../models/Planillas.js';
import { Jurados } from '../models/Jurados.js';
import { sequelize } from '../database/database.js';
export const obtenerTG = async (req,res) => {
    const tg = await TG.findAll();
    res.json(tg);
};
export const crearTG = async (req,res) => {
    console.log("crearTG")
    try {
        const {titulo,modalidad,id_tutor_academico,id_tutor_empresarial,id_empresa } = req.body;
        console.log(titulo)
        console.log(modalidad)
        const nuevo = await TG.create({
            titulo,
            modalidad,
            id_tutor_academico,
            id_tutor_empresarial,
            id_empresa
        },
        {
            fields: ["titulo","modalidad","id_tutor_academico","id_tutor_empresarial","id_empresa"]
        });
        res.json(nuevo);
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en creación de TG", error: error })
    }
};
export const actualizarTG = async (req,res) => {
    const {
        titulo,
        modalidad,

    } = req.body;
    const id = req.params.id;
    try {
        const buscar = await TG.findByPk(id);

        buscar.titulo = titulo;
        buscar.modalidad = modalidad;
        const actualizar = await buscar.save();
        
        res.json( { mensaje: "TG actualizado correctamente", TG: buscar });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar TG", error: error.message});
    }
}

export const eliminarTG = async (req,res) => {
    const id = req.params.id;
    try {
        const eliminar = await TG.destroy({
            where: {
                id_tg: id
            }
        });
        res.status(204).json('El TG fue eliminado con exito ');
    } catch (error) {
        return res.status(500).json( { mensaje: "Error en eliminación de TG", error: error.message })
    }
}

export const buscarTG = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await TG.findByPk(id);
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("TG no encontrado");
    }
}

export const buscarTGByModalidad = async (req, res) => {
    const id = req.params.id;
    
    try {
        const buscar = await TG.findAll({
            where: {
                modalidad: id
            }
        });
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("TG no encontrado");
    }
}
export const evaluacionComite = async (req, res) => {
    const id = req.params.id;
    const { decision_comite } = req.body;
    try {
        const buscar = await TG.findOne({
            where: {
                id_tg: id
            }
        });

        buscar.evaluacion_cde = decision_comite;
        const actualizar = await buscar.save();
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Error en evaluación de comite");
    }
}
/*
export const evaluacionComite = async (req, res) => {
    const id = req.params.id;
    const { desicion_comite,id_cde } = req.body;
    try {
        const buscar = await TG.findOne({
            where: {
                id_tg: id
            }
        });

        buscar.estatus = desicion_comite;
        buscar.id_cde_tutor = id_cde;
        buscar.evaluacion_cde = desicion_comite;
        const actualizar = await buscar.save();
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Error en evaluación de comite");
    }
}
*/
export const evaluacionRevisor = async (req, res) => {
    const id = req.params.id;
    const { decision_revisor, observaciones_revisor, estatus } = req.body;

    try {
        const buscar = await TG.findOne({
            where: {
                id_tg: id
            }
        });

        buscar.estatus = estatus;
        buscar.decision_revisor = decision_revisor;
        buscar.observaciones_revisor = observaciones_revisor;
        buscar.fecha_revision = new Date();
        
        const actualizar = await buscar.save();
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Error en evaluación de revisor");
    }
}

export const evaluacionCDE = async (req, res) => {
    const id = req.params.id;
    const { desicion_cde,id_cde,observaciones_cde_t } = req.body;

    try {
        const buscar = await TG.findOne({
            where: {
                id_tg: id
            }
        });

        buscar.estatus = desicion_cde;
        buscar.id_cde_tutor = id_cde;
        buscar.observaciones_cde_t = observaciones_cde_t;
        buscar.evaluacion_cde = desicion_cde;
        buscar.fecha_cde = new Date()
        const actualizar = await buscar.save();
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Error en evaluación de consejo de escuela");
    }
}

export const asignarTutorAcademico = async (req, res) => {

    try {
        console.log("asignarTutorAcademico desde api")
        const id = req.params.id;
        const { id_tutor_academico, observaciones_cde_t } = req.body;
        const buscar = await TG.findOne({
            where: {
                id_tg: id
            }
        });

        buscar.id_tutor_academico = id_tutor_academico;
        buscar.observaciones_cde_t = observaciones_cde_t;
        buscar.tutor_asignado = true;
        const actualizar = await buscar.save();
        return res.json(buscar);
    } catch (error) {
        return res.status(500).json({error: error});
    }
}

export const asignarRevisor = async (req, res) => {
    const id = req.params.id;
    const { id_profesor_revisor } = req.body;

    try {
        const buscar = await TG.findOne({
            where: {
                id_tg: id
            }
        });

        buscar.id_profesor_revisor = id_profesor_revisor;
        const actualizar = await buscar.save();
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Error en asignacion de revisor");
    }
}

export const asignarTutorEmpresarial = async (req, res) => {
    const id = req.params.id;
    const { id_tutor_empresarial } = req.body;

    try {
        const buscar = await TG.findOne({
            where: {
                id_tg: id
            }
        });

        buscar.id_tutor_empresarial = id_tutor_empresarial;

        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Error en asignacion de tutor empresarial");
    }
}

export const buscarTGByEstatus = async (req, res) => {
    const id = req.params.id;
    try {
        const buscar = await TG.findAll({
            where: {
                estatus: id
            }
        });
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json({mensaje: "Error en busqueda por estatus", error: error.message});
    }
}

export const obtenerTGSinRevisor = async (req, res) => {
    try {
        const buscar = await TG.findAll({
            where: {
                estatus: 'PR',
                id_profesor_revisor: {
                    [Op.eq]: null
                }
            }
        });
        console.log(buscar)
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Error en busqueda por estatus");
    }
}

export const obtenerTGConRevisor = async (req, res) => {
    try {
        const buscar = await TG.findAll({
            where: {
                estatus: 'PR',
                id_profesor_revisor: {
                    [Op.ne]: null
                }
            }
        });
        console.log(buscar)
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Error en busqueda por estatus");
    }
}

export const obtenerEstudiantesDeTG = async (req, res) => {
    const id = req.params.id
    try {
        const buscar = await TG.findAll({
            include: {
                model: Realiza_tg,
                include: {
                    model: Estudiantes
                },
    
            },
            where: {
                id_tg: id
            }
        });
        console.log(buscar)
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Error en busqueda por estatus");
    }
}

export const anexarPlanilla = (req, res) => {
    const{ id_tg, nombre_planilla,documento } = req.body
    try {
        const nuevo = Planillas.create({
            id_tg,
            nombre_planilla,
            documento
        },
        {
            fields: ["id_tg","nombre_planilla","documento"]
        });
        return res.json({mensaje: "Planilla anexada"});
    } catch (error) {
        return res.status(404).json("Error en busqueda por estatus");
    }
}

export const descargarPlanilla = async (req, res) => {
    const{ id_tg, nombre_planilla } = req.body
    try {
        const buscar = await Planillas.findOne({
            where: {
                id_tg: id_tg,
                nombre_planilla: nombre_planilla
            }
        });
        //console.log(buscar)
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Error en busqueda por estatus");
    }
}

export const obtenerTGsinJurado = async (req, res) => {
        const buscar = await sequelize.query("SELECT T.* FROM TG AS T LEFT JOIN Jurados AS J ON T.id_tg = J.id_tg WHERE J.id_tg IS NULL AND T.estatus = 'A'", { type: QueryTypes.SELECT});
        console.log(buscar)
        return res.json(buscar)
}

export const obtenerTGconJurado = async (req, res) => {
    const{ id_tg, nombre_planilla } = req.body
    try {
        const buscar =  await sequelize.query("SELECT T.* FROM TG AS T, Jurados AS J, Realiza_tg AS RT WHERE T.id_tg = J.id_tg AND RT.id_tg = T.id_tg AND RT.nota IS NULL GROUP BY T.id_tg", { type: QueryTypes.SELECT});
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Error en busqueda por estatus");
    }
}


export const designarCDEJurado = async (req, res) => {
    try {
        const{ id_tg,id_cde,observaciones_cde_j} = req.body
        const buscar = await TG.findOne({
            where: {
                id_tg: id_tg
            }
        });
        buscar.id_cde_jurado = id_cde;
        buscar.observaciones_cde_j = observaciones_cde_j;
        const actualizar = await buscar.save();
        return res.json(buscar);
    } catch (error) {
        return res.status(404).json("Error en designación de jurado por parte del CDE");
    }
}

export const obtenerPropuestasSinTutorAcademicoAsignado = async (req, res) => {
    try {
        const tgs = await TG.findAll({
            where: {
                tutor_asignado: false,
                estatus: 'A'
            }
        })
        return res.json(tgs);
    } catch (error) {
        return res.status(404).json("Error en designación de jurado por parte del CDE");
    }
}

export const defensaTrabajoDeGrado = async (req, res) => {
    try {
        console.log('Estoy en defensa de tg');
        const {fecha_defensa, mencion, razon_mencion, fecha_entrega_informe,id_tg, alumnos} = req.body
        console.log('Estoy en defensa de tg');
        console.log({fecha_defensa, mencion, razon_mencion, fecha_entrega_informe,id_tg, alumnos});
        const tgs = await TG.findOne({
            where: {
                id_tg: id_tg,
            }
        });

        alumnos.forEach(async (alumno)=>{
            let buscar = await Realiza_tg.findOne({
                where: {
                    cedula_estudiante: alumno.cedula,
                    id_tg: id_tg
                }
            });
            buscar.nota = alumno.nota;
            let actualizar = await buscar.save();
        })
        tgs.fecha_defensa = fecha_defensa;
        tgs.mencion = mencion;
        tgs.razon_mencion = razon_mencion;
        tgs.fecha_entrega_informe = fecha_entrega_informe;
        const actualizar = await tgs.save();
        return res.json(tgs);
    } catch (error) {
        return res.status(500).json({error: error, mensaje: 'Error en defensa'});
    }
}