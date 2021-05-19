const Users = require('../models/userModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Payments = require('../models/paymentModel')
const userCtrl = {
register:async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        const user  = await Users.findOne({email})
        if(user) return res.status(400).json({msg:"The email aleready exists."})
        if(password.length < 6)
        return res.status(400).json({msg:"Password is at least 6 characters long."})
        //password encrypt
        const passwordHash = await bcrypt.hash(password,10)
        //create new user
        const newUser = new Users({
            name,email,password:passwordHash
        })
        
        await newUser.save()
        //then create jsonwebtoken to authentication
        const accessToken = createAccessToken({id:newUser._id})
        const refreshToken = createRefreshToken({id:newUser._id})
        res.cookie('refreshtoken',refreshToken,{
            httpOnly:true,
            path:'/user/refresh_token'
        })
        res.json(accessToken)
        
    }catch(err){
        return res.status(500).json({msg:err.message})
    }

},
refreshToken:(req,res)=>{
    try{
        const rf_token = req.cookies.refreshtoken;
        if(!rf_token) return res.status(400).json({msg:"Please loging or register"})
        jwt.verify(rf_token,process.env.REFRESH_TOKEN_SECRET,(err,user)=>{
            if(err) return res.status(400).json({msg:"Please Login or Register"})
            const accessToken  = createAccessToken({id:user.id})
            res.json({accessToken})
        })

        // res.json({rf_token})

    }catch(err){
        return res.status(500).json({msg:err.message})
    }
},
login:async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await Users.findOne({email})
        if(!user) return res.status(400).json({msg:"User does not exist"})
        const isMash = await bcrypt.compare(password,user.password)
        if(!isMash) return res.status(400).json({msg:"Incorrect password."})
        //If login success,create access token and refresh token  
        const accessToken = createAccessToken({id:user._id})
        const refreshToken = createRefreshToken({id:user._id})
        res.cookie('refreshtoken',refreshToken,{
            httpOnly:true,
            path:'/user/refresh_token'
        })
        res.json(accessToken)
        // res.json({msg:"Login success!"})

    }catch(err){
        return res.status(500).json({msg:err.message})


    }

},
logout:async(req,res)=>{
    try{
        res.clearCookie('refeshtoken',{path:'/user/refresh_token'})
        return res.json({msg:"Logged out"})
    }catch(err){
        return res.status(500).json({msg:err.message})

    }
},
getUser:async(req,res)=>{
    try{
        // res.json(req.user)
        const user = await Users.findById(req.user.id).select('-password')
        if(!user) return res.status(400).json({msg:"User does not exist."})
        res.json(user)
    }catch (err){
        return res.status(500).json({msg:err.message})
    }
} ,
addCart:async (req,res) =>{
    try {
        const user = await Users.findById(req.user.id)
        if(!user) return res.status(400).json({msg:"User does not exist."})
        await Users.findOneAndUpdate({_id:req.user.id},{
            cart:req.body.cart
        })
        return res.json({msg:"Added to cart"})
        
    } catch (err) {
        return res.status(500).json({msg:err.message})

        
    }
},
history:async (req,res) =>{
    try {
        const history = await Payments.find({user_id:req.user.id})
        res.json(history)
        
    } catch (err) {
        return res.status(500).json({msg:err.message})

        
    }
}

}
const createAccessToken = (user) =>{
    return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1d'})
}
const createRefreshToken = (user) =>{
    return jwt.sign(user,process.env.REFRESH_TOKEN_SECRET,{expiresIn:'7d'})
}
module.exports = userCtrl