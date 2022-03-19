const mongoose = require("mongoose");

const educateurSchema = mongoose.Schema({
  nom:String,
  prenom:String,
  dateNaissance:String,
  lieuNaissance:String,

  equipement:[
    { type:mongoose.Schema.Types.ObjectId, ref:"Equipement", default:[] },
  ],

  materiel:[
    { type:mongoose.Schema.Types.ObjectId, ref:"Materiel", default:[] },
  ],

}) 

const Educateur = mongoose.model("Educateur", educateurSchema); 

module.exports = Educateur;