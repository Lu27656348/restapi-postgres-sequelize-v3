import { Router } from 'express';
import { buscarAdministradores,verificarContrasena } 
from '../controllers/Administradores.controller.js'
const router = Router();
router.put('/Administradores',buscarAdministradores);
router.put('/verificarContrasena',verificarContrasena);
export default router;