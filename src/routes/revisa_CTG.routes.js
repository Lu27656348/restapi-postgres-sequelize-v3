import { Router } from 'express';
import { actualizarrevisa_CTG, buscarrevisa_CTG, crearrevisa_CTG, eliminarrevisa_CTG, obtenerrevisa_CTG } 
from '../controllers/revisa_CTG.controller.js'
const router = Router();
router.get('/revisa_CTG',obtenerrevisa_CTG);
router.post('/revisa_CTG',crearrevisa_CTG);
router.put('/revisa_CTG',actualizarrevisa_CTG)
router.delete('/revisa_CTG',eliminarrevisa_CTG);
router.get('/buscar/revisa_CTG',buscarrevisa_CTG);


export default router;