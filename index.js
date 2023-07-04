import "dotenv/config";
import "./database/connectdb.js";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
//import authRoutes from './routers/auth_router.js';

const app = express();

app.use(cookieParser);
app.use(express.json());
//app.use("/api/v1/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("😍😍 http://localhost:"+PORT));