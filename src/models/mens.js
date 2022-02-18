const express = require ("express");
const mongoose = require("mongoose");
const menShema = new mongoose.Schema ({
    
    ranking :
     {
        type:Number,
        required:true,
        unique:true,
        trim:true

    },
    name:
    {
        type:String,
        required:true,
        trim:true
        
    },
    dob:
    {
type:Date,
required:true,
trim:true

    },
    country:
    {
        type:String,
        required:true,
        trim:true
        
    },
    score:
    {
        type:Number,
        required:true,
        trim:true
        
    },
    event:
    {
        type:String,
        default:"100m"
    }


});

// we rae ceating new collection and it should be capital

const MenRankings = new mongoose.model("MenRankig", menShema);
// we export the module frm here that we use it in other pages
module.exports= MenRankings;