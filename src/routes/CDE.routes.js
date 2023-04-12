import { Router } from 'express';
import { actualizarCDE, buscarCDE, crearCDE, eliminarCDE, obtenerCDE } 
from '../controllers/CDE.controller.js'
const router = Router();
router.get('/CDE',obtenerCDE);
router.post('/CDE',crearCDE);
router.put('/CDE/:id',actualizarCDE)
router.delete('/CDE/:id',eliminarCDE);
router.get('/CDE/:id',buscarCDE);


export default router;