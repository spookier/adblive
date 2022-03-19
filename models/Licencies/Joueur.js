const mongoose = require("mongoose");

const joueurSchema = mongoose.Schema({
  nom:String,
  prenom:String,
  dateNaissance:String,
  lieuNaissance:String,
  securiteSociale:{type: Number, unique:true},
  telephone:String,
  indemnites:Number,
  responsableLegal:String,
  categorie:String,

  equipement:[
    { type:mongoose.Schema.Types.ObjectId, ref:"Equipement", default:[] },
  ],

  materiel:[
    { type:mongoose.Schema.Types.ObjectId, ref:"Materiel", default:[] },
  ],

}) 

const Joueur = mongoose.model("Joueur", joueurSchema); 

module.exports = Joueur;