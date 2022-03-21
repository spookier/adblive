const Benevole = require("../models/Licencies/Benevole");
const Educateur = require("../models/Licencies/Educateur");
const Joueur = require("../models/Licencies/Joueur");


exports.getAll = async(req, res)=>
{
  try 
  {
    let all = [];
    all.push(await Benevole.find());
    all.push(await Educateur.find());
    all.push(await Joueur.find());
    res.status(200).json(all);
  }
  catch(error)
  {
    res.status(500).json(error);
  }
}

exports.createBenevole = async (req,res) =>
{
  try 
  {
    let benevole = await Benevole.create(req.body);
    res.status(201).json(benevole);
  }
  catch (error) 
  {
    res.status(500).json(error);
  }
};

exports.getBenevoles = async (req, res)=>
{
  try 
  {
    let benevoles = await Benevole.find();
    res.status(200).json(benevoles);
  } 
  catch (error) 
  {
    res.status(500).json(error);
  }
}

exports.createEducateur = async (req,res) =>
{
  try 
  {
    let educateur = await Educateur.create(req.body);
    res.status(201).json(educateur);
  }
  catch (error) 
  {
    res.status(500).json(error);
  }
};

exports.getEducateurs = async (req,res) =>
{
  try 
  {
    let educateur = await Educateur.find();
    res.status(200).json(educateur);
  } 
  catch (error) 
  {
    res.status(500).json(error);
  }
};

exports.createJoueur = async (req,res) =>
{
  try 
  {
    let joueur = await Joueur.create(req.body);
    res.status(201).json(joueur);
  }
  catch (error) 
  {
    res.status(500).json(error);
  }
};

exports.getJoueurs = async (req,res) =>
{
  try 
  {
    let joueur = await Joueur.find();
    res.status(200).json(joueur);
  }
  catch (error) 
  {
    res.status(500).json(error);
  }
};

