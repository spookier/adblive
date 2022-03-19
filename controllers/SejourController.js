const Sejour = require("../models/Sejour");


exports.createSejour = async (req,res) =>
{
  try 
  {
    let sejour = await Sejour.create(req.body);

    res.status(201).json(sejour);
  }
  catch (error) 
  {
    res.status(500).json(error);
  }
};


exports.getSejours = async(req, res) =>
{
  try 
  {
    let sejours = await Sejour.find();
    res.status(200).json(sejours);
  } 
  catch (error) 
  {
    res.status(500).json(error);
  }
}

exports.deleteSejour = async(req, res) =>
{
  try 
  {
    const idSejour = req.params.id;
    let sejour = await Sejour.findByIdAndDelete(idSejour);
    
    res.status(200).json(sejour);
  } 
  catch (error) 
  {
    res.status(500).json(error);
  }
}