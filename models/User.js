import mongoose from "mongoose";
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

export const User = model('user', userSchema);