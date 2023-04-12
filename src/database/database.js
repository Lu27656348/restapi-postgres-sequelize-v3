import { Sequelize } from "sequelize";

//const databaseURL = 'postgresql://postgres:admin@localhost:5432/UCAB-Cunaguaro';
import {DATABASE_URL} from '../config.js'
const databaseURL = DATABASE_URL;
export const sequelize = new Sequelize(databaseURL,
{
  define: {
        freezeTableName: true
   } 
});