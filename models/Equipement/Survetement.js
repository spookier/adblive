const mongoose = require("mongoose");

//après avoir créer un survet faut l'ajouter à un licencié

const survetementSchema = mongoose.Schema(
  {
    survetTotal:Number,
    tailleSurvet:String,
    ageSurvet:String,
    
    commentaires:String,
  }
) 

const Survetement = mongoose.model("Survetement", survetementSchema); 

module.exports = Survetement;