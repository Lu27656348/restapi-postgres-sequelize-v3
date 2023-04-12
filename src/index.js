import app from "./app.js";
import { sequelize } from "./database/database.js";

import {PORT} from './config.js'
const port = PORT;
try {
    await sequelize.sync();
    app.listen(port);
    console.log("Servidor iniciado en el puerto", port);
} catch (error) {
    console.error('Error al iniciar servidor:', error);
}