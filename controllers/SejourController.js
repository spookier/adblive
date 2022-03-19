const Sejour = require("../models/Sejour");
const Admin = require("../models/Admin");


exports.createSejour = async (req,res) =>
{
  try 
  {
    let sejour = await Sejour.create(req.body);
    let user = await Admin.create(req.body);
    console.log(` ${user.login} created new sejour !`);
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
    //let user = await Admin.create(req.body);

    //console.log(` ${user.login} deleted sejour ${idSejour}`);
    let sejour = await Sejour.findByIdAndDelete(idSejour);
    
    res.status(200).json(sejour);
  } 
  catch (error) 
  {
    res.status(500).json(error);
  }
}