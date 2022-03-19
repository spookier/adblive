//premier compte donné a l'admin 
//Ici l'admin il va acceder pour créer des nouveaux comptes...

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const utilisateurSchema = mongoose.Schema({
  nom:String,
  email:{type:String, unique:true},
  password:String,
  droits:{type:String, default : "user"} // user = utilisateur normal(read-only), admin = tous les accées
});

utilisateurSchema.pre("save", async function(next)
{
  if(this.isModified("password"))
  {
    let passwordHashed = await bcrypt.hash(this.password, 3);
    this.password = passwordHashed;
  }
  next();
});

const Utilisateur = mongoose.model("Utilisateur", utilisateurSchema);

module.exports = Utilisateur;