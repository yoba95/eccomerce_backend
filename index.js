import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import './database/connectdb.js';
import authRouter from './routers/auth_router.js';



const PORT = process.env.PORT || 9000;

const app = express();

app.use(express.json());
app.use('/api/v1/auth',authRouter);


app.listen(PORT, console.log("😍😍 http://localhost:"+PORT));