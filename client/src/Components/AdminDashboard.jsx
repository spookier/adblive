import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div>
      <label style={{ position: "relative", left: "45%", top: "-35px", color: "whitesmoke" }}>ADMIN DASHBOARD</label>
      <br />
      <br />
      <Container fluid="md">
        <Row>
          <Col>
            <h2><Link to="/inscriptionSejour">SEJOURS</Link></h2>
          </Col>
          <Col><h2>MATERIEL</h2></Col>
          <Col>
            <h2><Link to="/inscriptionLicenciee">LICENCIÉS</Link></h2>
          </Col>
          <Col><h2>EQUIPEMENTS</h2></Col>
          <Col><h2>CONTRATS</h2></Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col><h2>BUVET</h2></Col>
          <Col><h2>R.D.V</h2></Col>
          <Col><h2>TRAVAUX</h2></Col>
          <Col><h2>STAGIAIRES</h2></Col>
          <Col><h2>SPONSORS</h2></Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            <h2><Link to="/inscriptionUser">USERS</Link></h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}