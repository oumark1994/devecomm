const Message  = require('../models/messagesModels')

const messageCtrl ={
    getMessages:async(req,res) =>{
        try {
            const message = await Message.find()
            res.json(message)
            
        } catch (err) {
            return res.status(500).json({msg:err.message})
            
        }
    },
    createMessage: async(req,res) =>{
        try {
            
            const {firstname,lastname,email,subject,message} = req.body;
            
            const newMessage = new Message({ 
                firstname,lastname,email,subject,message
            })
            
            
            await newMessage.save()
            // console.log(newPayment)
            if(newMessage) 
            res.json({msg:"Message send Succesfully!"})
            res.json({newMessage})
        } catch (err) {
            return res.status(500).json({msg:err.message})
            
        }
    }


}


module.exports = messageCtrl