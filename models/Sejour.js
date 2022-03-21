const mongoose = require("mongoose");

const sejourSchema = mongoose.Schema({
  type:String,
  dateSaisie:String,
  responsableSejour:String,

  nomParticipant:String,
  prenomParticipant:String,
  telParticipant:String,
  responsablelegalParticipant:String,
  securitesocialeParticipant:String,

  participation:Number, //en €
  typeParticipation:String,      // especes ou cheques
  subvention:Number,  //en €
  autofinancement:Number, //en €
  totalPrixSejour:Number, //en €
}) 

const Sejour = mongoose.model("Sejour", sejourSchema); 

module.exports = Sejour;