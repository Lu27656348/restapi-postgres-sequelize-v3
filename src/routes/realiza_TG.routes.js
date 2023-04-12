import { Router } from 'express';
import { actualizarRealiza_tg, buscarRealiza_tg, crearRealiza_tg, eliminarRealiza_tg, obtenerRealiza_tg } 
from '../controllers/realiza_TG.controller.js'
const router = Router();
router.get('/realiza_TG',obtenerRealiza_tg);
router.post('/realiza_TG',crearRealiza_tg);
router.put('/realiza_TG/actualizar',actualizarRealiza_tg);
router.delete('/realiza_TG/eliminar',eliminarRealiza_tg);
router.get('/realiza_TG/buscar',buscarRealiza_tg);


export default router;