import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

//L'admin il va enregistrer un nouveau compte ici
export default function InscriptionUtilisateur() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [droits, setDroits] = useState("");         // user = read-only, admin = tous les accées


  //Quand on valide le formulaire 
  const handleInscription = (event) => {
    event.preventDefault();

    //On fournit cette objet à axios
    const userInfo = {
      nom,
      email,
      password,
      droits,
    };

    axios
      .post("/api/admin/signUp", userInfo)
      .then((result) => console.log(result))
      .catch((err) => console.log(err.response))
  }

  return (
    <>
      <div className="container">
        <br />
        <div className="col-md-12 text-center">
          <h3>Création d'un utilisateur</h3>
        </div>
        <br />
        <Form onSubmit={handleInscription}>
          <Form.Group className="mb-3" controlId="ControlInput">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="nom" value={nom} onChange={(event) => setNom(event.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="ControlInput">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="email@example.com" value={email} onChange={(event) => setEmail(event.target.value)} />

          </Form.Group>
          <Form.Label htmlFor="inputPassword">
            Mot de passe</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword"
            value={password}
            onChange={(event) => setPassword(event.target.value)} />
          <br />

          {/* Buttons radio en BOOTSTRAP */}
          <div className="col-md-12 text-center">
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Utilisateur normal"
                  name="radio"
                  type={type}
                  id={`inline-${type}-1`}
                  value={droits}
                  onChange={(event) => setDroits("user")}
                />
                <Form.Check
                  inline
                  label="Admin"
                  name="radio"
                  type={type}
                  id={`inline-${type}-2`}
                  value={droits}
                  onChange={(event) => setDroits("admin")}
                />
              </div>
            ))}
          </div>

          <div className="col-md-12 text-center">
            <Button variant="outline-dark" type="submit">Créer utilisateur</Button>
          </div>

        </Form>
      </div>
    </>
  );
}