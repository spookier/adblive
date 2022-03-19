const mongoose = require("mongoose");

const sponsorSchema = mongoose.Schema({
  typeSponsor:Boolean, // 0 = Sponsor, 1 = Subvention
  typePaiement:Boolean, //0 = Especes, 1 = Cheque
  organisme:String, //Nom organisme
  montant:Number, //en €
  dateSaisie:String,
  dateEffet:String,
  nom:String,
  prenom:String,
  telephone:String,
}) 

const Sponsor = mongoose.model("Sponsor", sponsorSchema); 

module.exports = Sponsor;