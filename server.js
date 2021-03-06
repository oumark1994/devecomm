require('dotenv').config()
const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser');
const userRoute = require('./routes/userRouter')
const categoryRoute = require('./routes/categoryRouter')
const productRoute = require('./routes/productRouter')
const paymentRoute = require('./routes/paymentRouter')
const messageRoute = require('./routes/messageRouter')
const uploadRoute = require('./routes/upload.js')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({useTempFiles:true}))
app.use('/user',userRoute)
app.use('/api',categoryRoute)
app.use('/api',messageRoute)
// app.use('/api',uploadRoute)
app.use('/api',productRoute)
app.use('/api',paymentRoute)
app.use('/api',uploadRoute)
const URL = process.env.MONGODB_URL
mongoose.connect(URL,{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
},err=>{
    if(err) throw err;
    console.log('Connected to MongoDB')
})
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname,'client','build','index.html'))
    })
}
const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log('Server is running on port',PORT)
})
