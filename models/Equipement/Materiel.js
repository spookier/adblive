const mongoose = require("mongoose");

const materielSchema = mongoose.Schema(
  {
    plots:Number,
    balons:Number,
    cage:Number,
  }
) 

const Materiel = mongoose.model("Materiel", materielSchema); 

module.exports = Materiel;