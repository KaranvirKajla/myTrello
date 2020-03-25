const mongoose = require("mongoose");
const PrivateBoard = require("./privateBoard")
const PublicBoard = require("./publicBoard");
const Team = require("./team")
let personSchema = new mongoose.Schema({
    email:{
        unique:true,
        type:String
    },
    name:{
        type: String,
        default:""
    },
    password:{
        type:String,
        default:""
    },
    privateBoards:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "PrivateBoard"
    }],
    publicBoards:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "PublicBoard"
    }],
    teams:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Team"
    }]
})

module.exports= mongoose.model("Person",personSchema);

