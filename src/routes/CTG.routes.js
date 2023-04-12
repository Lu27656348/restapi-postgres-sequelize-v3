import { Router } from 'express';
import { actualizarCTG, buscarCTG, crearCTG, eliminarCTG, obtenerCTG } 
from '../controllers/CTG.controller.js'
const router = Router();
router.get('/CTG',obtenerCTG);
router.post('/CTG',crearCTG);
router.put('/CTG/:id',actualizarCTG)
router.delete('/CTG/:id',eliminarCTG);
router.get('/CTG/:id',buscarCTG);


export default router;