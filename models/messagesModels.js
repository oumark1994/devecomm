const mongoose =require('mongoose')
const messageSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
       
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
       
    },
    email:{
        type:String,
        required:true,
        trim:true, 
    },
    subject:{
        type:String,
        required:true,
        trim:true,
       
    },
    message:{
        type:String,
        required:true,
        trim:true,
       
    }
    
},{timestamps:true})
module.exports = mongoose.model("Message",messageSchema)