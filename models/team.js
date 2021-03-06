const mongoose = require("mongoose");
const PrivateBoard = require("./privateBoard");
const PublicBoard = require("./publicBoard");
const Comment = require("./comment");
const Person = require("./person");
let teamSchema = new mongoose.Schema({
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Person"
    },
   name:{
       type: String,
    //    required: true
   },
   type:{
       type: String
   },
   discription:{
       type:String,
   },
   members:[{
       type:mongoose.Schema.Types.ObjectId,
       ref:"Person"
   }],
   boards:[{
       type: mongoose.Schema.Types.ObjectId,
       ref:"PublicBoard"
   }]
})

module.exports= mongoose.model("Team",teamSchema);

