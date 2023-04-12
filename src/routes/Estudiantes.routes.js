import { Router } from 'express';
import {  
    obtenerEstudiantes,
    crearEstudiantes,
    actualizarEstudiantes,
    eliminarEstudiantes,
    buscarEstudiante
} 
from '../controllers/estudiantes.controller.js'
const router = Router();
router.get('/Estudiantes',obtenerEstudiantes);
router.post('/Estudiantes',crearEstudiantes);
router.put('/Estudiantes/:id',actualizarEstudiantes);
router.delete('/Estudiantes/:id',eliminarEstudiantes);
router.get('/Estudiantes/:id',buscarEstudiante);


export default router;