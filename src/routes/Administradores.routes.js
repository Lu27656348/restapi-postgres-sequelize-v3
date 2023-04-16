import { Router } from 'express';
import { buscarAdministradores,verificarContrasena,actualizarAdministradores, crearAdministradores, obtenerAdministradores, obtenerAdministradoresSinProfesor } 
from '../controllers/Administradores.controller.js'
const router = Router();
router.get('/Administradores',obtenerAdministradores);
router.get('/AdministradoresSinProfesor',obtenerAdministradoresSinProfesor);
router.post('/Administradores',crearAdministradores);
router.put('/Administradores',buscarAdministradores);
router.put('/actualizarAdministradores',actualizarAdministradores);
router.put('/verificarContrasena',verificarContrasena);
export default router;