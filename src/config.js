import {config} from 'dotenv'

config()

//export const PORT = process.env.PORT || 3000;
export const PORT = 3000;
export const DATABASE_URL = "postgresql://postgres:admin@localhost:5432/UCAB-Cunaguaro"
//export const DATABASE_URL = process.env.DATABASE_URL || "postgresql://postgres:admin@localhost:5432/UCAB-Cunaguaro"