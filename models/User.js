/*import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const {Schema, model} = mongoose;

const userSchema = new Schema({
    fullname: {
        type: String,
        trim: true,
        lowercase: true,
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
        index: { unique: true}
    },
    password: {
        type: String,
        require: true
    }
});

userSchema.pre("save", async function(next){
   const user = this;

   //metodo para actualizar la contraseña del usuario

   if (!user.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        next();
    } catch (error) {
        console.log(error);
        throw new Error("falló el hash de la contraseña")
    }
});

export const User = model('User', userSchema);
*/