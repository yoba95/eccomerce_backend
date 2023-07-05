export const register = (req, res) => {
   // req.body = { fullname, email, password}
   console.log(req.body)
};

export const login = (req, res) => {
    res.json({ok: true});
};