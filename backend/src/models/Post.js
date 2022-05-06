const {Schema,model } = require("mongoose");

const PostSchema = new Schema({

    title: {
        type:String,
        required:true,
    },
    comment: {
        type: String,
        required: true
    },
    autor: {
        type:String,
        required: true
    }
},
{
    timestamps: true,
},
{
    collection: 'posts'
}
)

module.exports = model('Post',PostSchema)