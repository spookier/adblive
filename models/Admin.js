//Tout premier compte donné a l'admin 
//Ici l'admin il va acceder pour créer des nouveaux comptes admin

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = mongoose.Schema({
  nom:String,
  login:{type:String, unique:true},
  password:String,
});

adminSchema.pre("save", async function(next)
{
  if(this.isModified("password"))
  {
    let passwordHashed = await bcrypt.hash(this.password, 3);
    this.password = passwordHashed;
  }
  next();
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;