const mongoose=require("mongoose")

const novelSchema=new mongoose.Schema({
    author:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    details:{type:String,required:true},
    name:{type:String,required:true}
})

const NovelModel=mongoose.model("novel",novelSchema)

module.exports={NovelModel}

