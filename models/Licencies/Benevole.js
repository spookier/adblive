const mongoose = require("mongoose");

const benevoleSchema = mongoose.Schema({
  nom:String,
  prenom:String,
  lieuNaissance:String,
  dateNaissance:String,
  securiteSociale:{type: Number, unique:true},
  telephone:String,
  dateEmbauche:String,
  indemnites:Number,
  categorie:String,

  equipement:[
    { type:mongoose.Schema.Types.ObjectId, ref:"Equipement", default:[] },
  ],

  materiel:[
    { type:mongoose.Schema.Types.ObjectId, ref:"Materiel", default:[] },
  ],
});

const Benevole = mongoose.model("Benevole", benevoleSchema); 

module.exports = Benevole;