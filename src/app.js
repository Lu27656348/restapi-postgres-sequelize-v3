import express from "express";
import bodyParser from "body-parser";

import estudiantesRoutes from './routes/Estudiantes.routes.js';
import externosRoutes from './routes/Externos.routes.js';
import profesoresRoutes from './routes/Profesores.routes.js';
import realiza_PTRoutes from './routes/realiza_TG.routes.js';
import tgRoutes from './routes/TG.routes.js';
import empresasRoutes from './routes/Empresas.routes.js'
import cdeRoutes from './routes/CDE.routes.js';
import juradoRoutes from './routes/Jurados.routes.js';
import ctgRoutes from './routes/CTG.routes.js';
import revisa_ctgRoutes from './routes/revisa_CTG.routes.js';
import administradoresRoutes from './routes/Administradores.routes.js';

import cors from 'cors'

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(estudiantesRoutes);
app.use(externosRoutes);
app.use(profesoresRoutes);
app.use(realiza_PTRoutes);
app.use(tgRoutes);
app.use(empresasRoutes);
app.use(cdeRoutes);
app.use(juradoRoutes);
app.use(ctgRoutes);
app.use(revisa_ctgRoutes);
app.use(administradoresRoutes);

export default app;