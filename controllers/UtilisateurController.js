require("dotenv").config();
const Utilisateur = require("../models/Utilisateur");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Inscription
exports.signUp = async (req, res) =>
{
  try 
  {
    let user = await Utilisateur.create(req.body);
    const token = jwt.sign({ id: user.id }, process.env.PRIVATE_KEY);
    console.log(`---> Compte crée ${user.nom} avec droits: ${user.droits} `)
    res.status(201).json({message:"Inscrit avec succés!", user, token});
  } catch (error) 
  {
    res.status(500).json(error);  
  }
}

//Connexion
exports.login = async (req, res) =>
{
  try 
  {
    let user = await Utilisateur.findOne({email: req.body.email});
    if(user) //vérifier si email est correct
    {
      let isMatch = await bcrypt.compare(req.body.password, user.password); //verifier si mdp est correct
      if(isMatch)  //renvoi du token JWT
      {
        const token = jwt.sign({id:user.id}, process.env.PRIVATE_KEY);
        console.log(`---> ${user.droits} ${user.email} logged in !`);
        res.status(200).json({token});
      }
      else //mot de passe incorrect
      {
        res.status(400).json({message:"Mot de passe invalide !"});
      }
    }
      else res.status(400).json({message:"User n'existe pas"});
    }
  catch (error) 
  {
    res.status(400).json({message:"Erreur pendant le login"} + error);  
  }
};

//Verification du token
exports.isLoggedIn = (req, res, next) =>
{
  try {
    const token = req.headers.authorization.replace("Bearer ", "");
  jwt.verify(token, process.env.PRIVATE_KEY, function (error, payload)
  {
    if(error)
    {
      res.status(401).json({message:"Unauthorized"});
    }
    else
    {
      req.payload = payload;
      next();
    }
  })
  } 
  catch (error)
  {
    res.status(401).json({message:"Unauthorized"} + error)
  };
}