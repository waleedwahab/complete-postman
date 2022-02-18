const express = require ("express");
require("../src/db/conn");
const app = express();
const MensRanking = require("../src/models/mens");
app.use(express.json());
const port = process.env.PORT || 3004;
// we will handle post request here
app.post("/mens", async( req , res)=>
{
    try {
       
        const addingMensRecords = new MensRanking(req.body);
        console.log(req.body);
         const insertMens = await addingMensRecords.save();

res.status(201).send(addingMensRecords );
    } catch (error) {
        
        res.status(400).send(error);
    }

})
app.get("/mens", async(req , res)=>
{
    try{

        
        const getMenn = await MensRanking.findById({}).sort({"ranking:":1});
   res.send(getMenn);
    }
    catch(er)
        {

        }
    
})
app.get("/mens/:id", async(req , res)=>
{
    try{

        const _id = req.params.id;
        const getMen = await MensRanking.findById(_id);
   res.send(getMen);
    }
    catch(er)
        {

        }
    
})
app.patch("/mens/:id", async(req , res)=>
{
    try{

        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndUpdate(_id, req.body,{new:true});
   res.send(getMen);
    }
    catch(er)
        {

        }
    
})
app.delete("/mens/:id", async(req , res)=>
{
    try{

        const _id = req.params.id;
        const getMen = await MensRanking.findByIdAndDelete(_id,{new:true});
   res.send(getMen);
    }
    catch(er)
        {

        }
    
})
app.get("/mens", async (req, res)=>
{
try
{   
 const getMens =  await MensRanking.find({});
 res.status(201).send(getMens);



}catch(e)
{
    res.status(400).send(e);

}
}
 )
app.listen(port, ()=>
{
    console.log(`connectoin is at ${port}`);
})