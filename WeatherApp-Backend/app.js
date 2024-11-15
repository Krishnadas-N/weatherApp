const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const {connectDb} = require('./config/mongooseConnection.js')
const weatherRouter = require('./routes/weatherRoute.js')

const startServer = ()=>{
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({extended:true}))
    app.use(cors())
    connectDb()
    app.use('/',weatherRouter)
    app.use((err,req,res)=>{
        if(err){
            return res.status(err.statusCode || 500).json({
                success:false,
                message:"An Erron Encountered On Server",
                err:err
            })
        }
    })
    app.listen(PORT,()=>{
        console.log(`Server is Listening on port ${PORT}`)
    })
}

startServer()