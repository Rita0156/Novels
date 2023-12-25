 const {NovelModel}=require("../Model/book")
 const Router=require("express")

 const NovelsRouter=Router()

NovelsRouter.get("/novel",async(req,res)=>{
    console.log("my novel")
      const data=await NovelModel.find()
      console.log(data);
      res.json(data)
})

NovelsRouter.post("/post",async(req,res)=>{
    const {author,image,price,details,name}=req.body;
    console.log(req.body,"img uploading")
    try{
         const img = new NovelModel({
            author,
            price,
            image,
            details,
            name 
        })
         await img.save()
         res.json({Status:'ok',message:"novel created"});

    }
    catch{
        console.log("error get");
        res.json({Status:'error'});
    }
})

module.exports={NovelsRouter}