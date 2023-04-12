import { Router } from 'express';
import { actualizarEmpresas, buscarEmpresas, crearEmpresas, eliminarEmpresas, obtenerEmpresas } 
from '../controllers/Empresas.controller.js'
const router = Router();
router.get('/Empresas',obtenerEmpresas);
router.post('/Empresas',crearEmpresas);
router.put('/Empresas/:id',actualizarEmpresas)
router.delete('/Empresas/:id',eliminarEmpresas);
router.get('/Empresas/:id',buscarEmpresas);


export default router;