const User = require("../models/User")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authConfig = require("../config/auth")

function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    } )
}

module.exports = {
    async store(req,res){
        const {nome,email,senha,avatar} = req.body

        const UserExists = await User.findOne({email:email})

        if(UserExists){
            return res.status(400).json({ error: "User already exists"})
        }

        const user = await User.create({
            nome,
            email,
            senha,
            avatar
        })

        const token = generateToken({id: user.id})
        return res.json({user,token })
    },

    async update(req,res){
        const {nome,email,senha,avatar} = req.body

        const user = await User.findOne({_id: req.userID})

        if(!user){
            return res.status(400).json({ error: "User does not exist"})
        } 
            const newUser = await User.updateOne({nome:nome},{
                avatar: avatar,
                email:email,
                senha:senha
            })

            return res.json(newUser)
        
    },

    async delete(req,res){
        const {senha} = req.body
        const user = await User.findOne({_id: req.userID})

        if(!user){
            return res.status(400).json({error: "User does not exist"})
        }

        if(!await bcrypt.compare(senha,user.senha))
            return res.status(400).json({error: "Wrong Password!"})

        return res.json(await User.findByIdAndRemove({_id: user._id}))
    },

    async login(req,res){
        // var list = authConfig.blacklist
    //    console.log(list)
        const {email, senha} = req.body

        const user = await User.findOne({email: email})

        if(!user)
            return res.status(400).json({error:"User does not exist"})

        if(!await bcrypt.compare(senha,user.senha))
            return res.status(400).json({error: "Wrong Password"})

        user.senha = undefined

        const token = generateToken({id: user.id})
        return res.json({user,token})
    },

    async logoff(req,res) {
       var list = authConfig.blacklist
        list.push()
    }
}