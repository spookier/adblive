import React, { useContext, useState } from "react";
import axios from "axios";
import TokenContext from "../Context";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import "./Connexion.css";

export default function Connexion() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setToken } = useContext(TokenContext);

  const navigate = useNavigate();

  const handleConnexion = (event) => {
    event.preventDefault();

    const userInfo = {
      email,
      password,
    };

    axios.post("/api/user/login", userInfo)
      .then((resultat) => {
        const token = resultat.data.token;
        localStorage.setItem("token", token);
        setToken(token);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err.response.data));
  }

  return (
    <>
      <div className="container">
        <br />
        <div className="col-md-12 text-center">
          <h1>Se connecter</h1>
        </div>
        <br />
        <Form onSubmit={handleConnexion}>
          <Form.Group className="mb-3" controlId="ControlInput">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="nom@example.com" value={email} onChange={(event) => setEmail(event.target.value)} />
          </Form.Group>
          <Form.Label htmlFor="inputPassword">
            Mot de passe</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <div className="col-md-12 text-center">
            <Button variant="outline-dark" type="submit">Se connecter</Button>
          </div>
        </Form>
      </div>
    </>
  );
}
