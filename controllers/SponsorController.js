const Sponsor = require("../models/Sponsor");

exports.createSponsor = async (req,res) =>
{
  try 
  {
    let sponsor = await Sponsor.create(req.body);
    res.status(201).json(sponsor);
  }
  catch (error) 
  {
    res.status(500).json(error);
  }
};

exports.getSponsors = async(req, res) =>
{
  try {
    let sponsors = await Sponsor.find();
    res.status(200).json(sponsors);
  } catch (error) 
  {
    res.status(500).json(error);
  }
}

exports.getSponsor = async (req, res) =>
{
  try 
  {
    const { id } = req.params;
    let sponsor = await Sponsor.findById(id);
    res.status(200).json(sponsor);
  } 
  catch (error) {
    res.status(500).json(error);
  }
}

exports.deleteSponsor = async (req, res) =>
{
  try 
  {
    const { id } = req.params;
    let sponsor = await Sponsor.findByIdAndDelete(id);
    res.status(200).json(sponsor);
  } 
  catch (error) 
  {
    res.status(500).json(error);
  }
}

exports.updateSponsor = async(req, res) =>
{
  try 
  {
    const {id} = req.params;
    let sponsor = await Sponsor.findByIdAndUpdate(id, {$set: req.body});
    res.status(200).json(sponsor);  
  } catch (error) 
  {
    res.status(500).json(error);
  }
}