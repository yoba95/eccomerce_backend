/*import {User} from "../models/User.js";

export const register = async (req, res) => {
    const { fullname, email, password} = req.body;

    try {
       //buscamos el usuario para prevenir que se explote la llamada si esq el email ya esta registrado en la base de datos
       let user = await User.findOne({email});
       if(user) return res.status(400).json({error: "Ya existe este usuario"});

        user = new User({fullname, email, password});
        await user.save(); 
        //jwt token

        return res.status(201).json({ok: true});
    } catch (error) {
        console.log(error)
        if (error.code === 11000) {
            return res.status(400).json({error: "Ya existe este usuario"});
        }
        return res.status(500).json({error: "Error del servidor"});
    }
};

export const login = async (req, res) => {
  try {
    const { email, password} = req.body;

    let user = await User.findOne({email});
    if (!user) return res.status(403).json({error: "No existe este usuario"});

    return res.status(201).json({ok: true})
  } catch (error) {
    console.log(error);
     return res.status(500).json({error: "Error del servidor"});
  }  
}
*/