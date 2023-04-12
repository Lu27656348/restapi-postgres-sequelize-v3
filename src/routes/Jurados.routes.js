import { Router } from 'express';
import { actualizarJurados, buscarJuradosByTG, crearJurados, eliminarJurados, obtenerJurados } 
from '../controllers/Jurados.controller.js'
const router = Router();
router.get('/Jurado/obtener/',obtenerJurados);
router.post('/crearJurado',crearJurados);
router.put('/Jurado/actualizar/',actualizarJurados);
router.delete('/Jurado/eliminar/',eliminarJurados);
router.put('/Jurado/buscar/',buscarJuradosByTG);



export default router;