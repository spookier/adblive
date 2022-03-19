//Permet d'utiliser les variables .env
require("dotenv").config();
const express = require("express");
const app = express();

const path = require("path");


const RouteSponsor = require("./Routing/RouteSponsor");
const RouteUtilisateur = require("./Routing/RouteUtilisateur");
const RouteLicencies = require("./Routing/RouteLicences");
const RouteSejour = require("./Routing/RouteSejour");

//ajouter CORS
const cors = require("cors");
app.use(cors());

//Permet de parser les info dans le body
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Connect to DB
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI,
{
  useNewUrlParser:true,
  useUnifiedTopology:true,
})
.then( () => console.log("Connexion à MongoDB réussie!"))
.catch( () => console.log("Connexion échoué à MongoDB..."));


//Routing des liens
app.use("/api/user", RouteUtilisateur);
app.use("/api/licencies", RouteLicencies);
app.use("/api/sponsor", RouteSponsor);
app.use("/api/sejour", RouteSejour);

app.use(express.static(path.join(__dirname, "client", "build")));


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


//à l'ecoute d'un port
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));