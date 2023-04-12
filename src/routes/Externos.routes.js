import { Router } from 'express';
import { actualizarExternos, buscarExterno, buscarExternoByCedula, crearExternos, eliminarExternos, obtenerExternos } 
from '../controllers/Externos.controller.js'
const router = Router();
router.get('/Externos',obtenerExternos);
router.post('/Externos',crearExternos);
router.put('/Externos/:id',actualizarExternos);
router.delete('/Externos/:id',eliminarExternos);
router.get('/Externos/:id',buscarExterno);
router.get('/Externos/cedula/:id',buscarExternoByCedula);


export default router;