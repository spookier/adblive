import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {useState} from "react";

import Accueil from "./Components/Accueil";
import Connexion from "./Components/Connexion";
import InscriptionUtilisateur from "./Components/InscriptionUtilisateur";
import InscriptionLicencie from "./Components/InscriptionLicencie";
import AdminDashboard from "./Components/AdminDashboard";
import NavBar from "./Components/NavBar";
import InscriptionSejour from "./Components/InscriptionSejour";

import TokenContext from "./Context";



import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const Provider = TokenContext.Provider;

  //Pour éviter de donner la valeaur initiale (null)
  const valueToken = localStorage.getItem("token") ? localStorage.getItem("token") : "";
  const [token, setToken] = useState(valueToken);

  return (
  <Provider value={{token, setToken}}>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscriptionLicenciee" element={<InscriptionLicencie />} />
        <Route path="/inscriptionUser" element={<InscriptionUtilisateur />} />
        <Route path="/inscriptionSejour" element={<InscriptionSejour />} />
      </Routes>
    </Router>
  </Provider>
  );
}

export default App;
