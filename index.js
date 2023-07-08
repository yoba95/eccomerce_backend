import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import {sequelize} from './database/connectdb.js';
//import authRouter from './routers/auth_router.js';



const PORT = process.env.PORT || 9000;

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//app.use('/api/v1/auth',authRouter);

async function main(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        app.listen(PORT);
        console.log("servidor corriendo 🔥😍🔥 en el puerto: "+PORT)
    } catch (error) {
        console.error("Error al conectar la base de datos", error);
    }
}
 main();