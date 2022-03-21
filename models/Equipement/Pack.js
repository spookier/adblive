const mongoose = require("mongoose");

const packSchema = mongoose.Schema(
  {
    packTotal:Number,
    taillePack:String,
    agePack:String,
    
    commentaires:String,
  }
) 

const Pack = mongoose.model("Pack", packSchema); 

module.exports = Pack;