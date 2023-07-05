import express from 'express';
import { login, register } from '../controllers/auth_controller.js';
import { validateResultExpress } from '../middlewares/validateResultExpress.js';
import {body} from "express-validator"

const router = express.Router();

router.post("/register",[
    body ("fullname", "nombre completo requerido").notEmpty(),
    body("email", "Formato de email incorrecto")
        .trim()
        .isEmail()
        .normalizeEmail(),
    body("password", "Minimo 8 carácteres").trim().isLength({min: 8}),
    body("password", "Formato de contraseña incorrecta").custom(
        (value, { req }) =>{
            if(value !== req.body.repassword){
                throw new Error("No coinciden las contraseñas");
            }
            return value;
        }
    ),
], 
    validateResultExpress, 
    register);

router.post('/login', [
         body("email", "Formato de email incorrecto")
            .trim()
            .isEmail()
            .normalizeEmail(),
        body("password", "Minimo 8 carácteres").trim().isLength({min: 8}),
    ],
    validateResultExpress, 
    login);


export default router;