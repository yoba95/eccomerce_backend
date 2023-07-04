const express = require('express');
import conect from "./models/index.js";
import cors from "cors";

const PORT = process.env.PORT || 9000;

const app = express();


app.listen(PORT, console.log("😍😍 http://localhost:"+PORT));