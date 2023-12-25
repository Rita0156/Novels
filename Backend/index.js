const express=require("express")
require('dotenv').config()
const PORT=process.env.PORT || 7500
const cors=require("cors")
const bodyParser=require("body-parser")
const app=express()
const {NovelsRouter}=require("./Routes/books")
app.use(cors())
app.use(express.json({limit:"60mb"}));
const {connectDB}=require("./Confing/db")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.use(express.json({limit:"70mb"}));
app.use(bodyParser.json({limit: '70mb'}));
app.use(express.urlencoded({limit: '70mb'}));


app.get("/",(req,res)=>{
    return res.send("novel api is running currectly")
})
app.use("/",NovelsRouter)

app.listen(PORT,async()=>{
    try{
      await connectDB
      console.log("connected to db successfully")
    }
    catch(err){
        console.log("failed to connect db");
       console.log(err)
    }
    console.log("running on port=",PORT)
})