import React, { useContext } from "react";
import Context from "../Context";
import { Navbar, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function NavBar() {

  const { token, setToken } = useContext(Context);

  const navigate = useNavigate();

  const deconnexion = async () => {
    localStorage.removeItem("token");
    await setToken("");
    navigate("/");
  }
  return (
    <Navbar bg="dark" variant="dark">
      {token ?
        (
          <Nav className="container-fluid">
            <Nav.Item>
              <Nav.Link href="/dashboard">DASHBOARD</Nav.Link>
            </Nav.Item>
            <Nav.Item className="ms-auto">
              <Nav.Link href="" onClick={deconnexion}>DECONNEXION</Nav.Link>
            </Nav.Item>

          </Nav>
        )
        :
        (
          <Nav className="container-fluid">
            <Nav.Item>
              <Nav.Link href="/">Accueil</Nav.Link>
            </Nav.Item>
            <Nav.Item className="ms-auto">
              <Nav.Link href="/connexion">Connexion</Nav.Link>
            </Nav.Item>
          </Nav>
        )
      }
    </Navbar>

  )
}