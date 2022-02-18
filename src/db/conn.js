const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/olympics2",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,  
}).then(()=>
{
    console.log("connection is successful");
}).catch((e)=>
{
    console.log("no connection");
})