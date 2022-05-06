const {Schema,model } = require("mongoose");
const bcrypt = require('bcryptjs')

const UserSchema = new Schema({

    nome: {
        type:String,
        required:true,
    },

    email: {
        type: String,
        required: true,
    },

    senha: {
        type: String,
        required:true,
    },

    avatar: {
        type: String,
        required:true,
    },

    posts: []
},
{
    timestamps: true,
}
,
{
    collection: 'users'
})

UserSchema.pre('save', async function(next) {

    const hash = await bcrypt.hash(this.senha, 10)

    this.senha = hash
    next()
})

module.exports = model('User',UserSchema)