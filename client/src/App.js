import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {useState} from "react";

import Accueil from "./Components/Accueil";
import Connexion from "./Components/Connexion";
import InscriptionAdmin from "./Components/InscriptionAdmin";
import InscriptionLicencie from "./Components/InscriptionLicencie";
import AdminDashboard from "./Components/AdminDashboard";
import NavBar from "./Components/NavBar";
import InscriptionSejour from "./Components/InscriptionSejour";
import Search from "./Components/SearchPage";

import TokenContext from "./Context";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const Provider = TokenContext.Provider;

  //Pour éviter de donner la valeaur initiale (null)
  const valueToken = localStorage.getItem("token") ? localStorage.getItem("token") : "";
  const [token, setToken] = useState(valueToken); 

  //On utilise inscrSejourContext dans 2 endroits, @SearchPage & @InscriptionSejour, des que y'as un post ou un delete on change l'etat ce qui fait communiquer les deux composants
  const [inscrSejourContext, setInscrSejourContext] = useState(null); 

  return (
  <Provider value={{token, setToken, inscrSejourContext, setInscrSejourContext}}>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscriptionLicenciee" element={<InscriptionLicencie />} />
        <Route path="/inscriptionAdmin" element={<InscriptionAdmin />} />
        <Route path="/inscriptionSejour" element={<InscriptionSejour />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  </Provider>
  );
}

export default App;
