const express = require("express");
const User = require("../models/user");
const bcrypt = require('bcryptjs')
const authRouter = express.Router();

// SING up Route
authRouter.post("/api/singup", async (req, res) => {
    try{
        const {name, email, password} = req.body;

        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res
            .status(400)
            .json({msg: " User with same email alrdy exists!"});
        }
        const hasedPassowrd = await bcrypt.hash(password, 8)
        let user = new User({
            email,
            password : hasedPassowrd,
            name,
        })
        user = await user.save();
        res.json(user);
    
        // post that data in datanase
    
        // return the data to the user
    } catch(e){
        res.status(500).json({ error: e.message })
    }
    // get the data form client
   
});

// authRouter.get('/user', (req, res) => {
//     res.json({msg:"Abel"});
// })

module.exports = authRouter;