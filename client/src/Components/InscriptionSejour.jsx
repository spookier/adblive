import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

//Style (bootstrap, material)
import { Form, Button, Row, Col } from "react-bootstrap";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';

import { makeStyles } from '@mui/styles';
import "./Inscription.css";

import TokenContext from "../Context";


//L'admin il va enregistrer un nouveau compte ici
export default function InscriptionSejour() {
  const [type, setType] = useState("");
  const [dateSaisie, setDateSaisie] = useState("");
  const [responsableSejour, setResponsableSejour] = useState("");
  const [nomParticipant, setNomParticipant] = useState("");
  const [prenomParticipant, setPrenomParticipant] = useState("");
  const [telParticipant, setTelParticipant] = useState("");
  const [responsablelegalParticipant, setResponsablelegalParticipant] = useState("");
  const [securitesocialeParticipant, setSecuritesocialeParticipant] = useState("");
  const [participation, setParticipation] = useState("");
  const [typeParticipation, setTypeParticipation] = useState("");
  const [subvention, setSubvention] = useState("");
  const [autofinancement, setAutofinancement] = useState("");
  const [totalPrixSejour, setTotalPrixSejour] = useState("");
  const { token } = useContext(TokenContext);

  //Variables d'etat utilisees pour refresh la datagrid & ajouter nouveau sejour
  const [submit, isSubmitting] = useState(false);

  //On stock ici la liste GET des séjours pour ensuite l'afficher
  const [listeSejours, setListeSejours] = useState([]);

  //Pour le DELETE reactif
  const[idDelete, setIdDelete] = useState("");

  //Material UI data table
  const columns = [
    { field: 'type', headerName: 'Type séjour', width: 130 },
    { field: 'nomParticipant', headerName: 'Nom', width: 140 },
    { field: 'prenomParticipant', headerName: 'Prenom', width: 140 },
    { field: 'telParticipant', headerName: 'Téléphone', width: 100 },
    { field: 'dateSaisie', headerName: 'Date séjour', type: "date", width: 100 },
    { field: 'typeParticipation', headerName: 'Type participation', width: 130 },
    { field: 'totalPrixSejour', headerName: 'Prix total', type: "number", width: 80 },
  ];

  //-----------------------------------------------------------------------
  //Droits d'admin pour la datagrid, si token existe ajouter une nouvelle Column Edit & Delete
  const handleIfAdmin = () => {
    if (token) {
      columns.push({
        field: "action", headerName: "", width: 100,
        renderCell: (params) => {
          return (
            <>
              <button className="sejoursEdit">Edit</button>
              <DeleteOutline className="sejoursDelete" onClick={() => handleDelete(params.row._id)} />
            </>
          )
        }
      });
    }
  }
  handleIfAdmin(); //Appelle de la fonction a chaque render
  //-----------------------------------------------------------------------


  //-------------------------------------
  // Enlever le blue outline du datagrid
  const useStyles = makeStyles({
    root: {
      '&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus': {
        outline: 'none',
      },
    }
  });
  const classes = useStyles();
  //------------------------------------


  //Trigger quand on valide le formulaire 
  const handleInscription = (event) => {
    event.preventDefault();
    isSubmitting(true);

    //On fournit cet objet à axios
    const userInfo =
    {
      type,
      dateSaisie,
      responsableSejour,
      nomParticipant,
      prenomParticipant,
      telParticipant,
      responsablelegalParticipant,
      securitesocialeParticipant,
      participation,
      typeParticipation,
      subvention,
      autofinancement,
      totalPrixSejour,
    };


    //On ajoute le header Auth sur la var "config" puis on l'envoi à axios
    const config = {
      headers: { "Authorization": `Bearer ${token}` },
    };

    axios
      .post("/api/sejour/createSejour", userInfo, config)
      .then((result) => console.log(result))
      .catch((err) => console.log(err.response))
  }

  //Trigger du onClick de l'icon Delete
  const handleDelete = (id) => 
  {
    setIdDelete(id); //on stock le id a delete pour l'utiliser dans le useEffect du displaygrid

    setListeSejours(listeSejours.filter(item => item._id !== idDelete));

    const config = {
      headers: { "Authorization": `Bearer ${token}` },
    };

    axios.delete(`/api/sejour/${id}`, config)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));

  }


  //-----------------------------------------------
  //DISPLAYGRID - Appelle du back-end pour remplir la datagrid + render apres le DELETE, trouver le id as effacer
  useEffect(() => {
    fetch("/api/sejour/")
      .then((data) => data.json())
      .then((data) => setListeSejours(data))
    isSubmitting(false);
  }, [submit, idDelete]);
  //-----------------------------------------------


  return (
    <>
      <Row className="g-0">
        <Col className="col-md-5 g-0">
          <div className="leftside d-flex">
            <Form className="p-3" onSubmit={handleInscription}>
              <Row>
                <div className="col-md-12 text-center"> <h3>Création de séjour</h3><br /></div>
                <Col>

                  <Form.Label>Type séjour</Form.Label>
                  <Form.Control className="mb-3" value={type} onChange={(event) => setType(event.target.value)} />

                  <Form.Label>Date séjour</Form.Label>
                  <Form.Control className="mb-3" placeholder="jj/mm/aaaa (31/12/2009)" value={dateSaisie}
                    onChange={(event) => setDateSaisie(event.target.value)} />

                  <Form.Label>Résponsable séjour</Form.Label>
                  <Form.Control className="mb-3" value={responsableSejour} onChange={(event) => setResponsableSejour(event.target.value)} />

                  <Form.Label>Nom du participant</Form.Label>
                  <Form.Control className="mb-3" value={nomParticipant} onChange={(event) => setNomParticipant(event.target.value)} />

                  <Form.Label>Prénom du participant</Form.Label>
                  <Form.Control className="mb-3" value={prenomParticipant} onChange={(event) => setPrenomParticipant(event.target.value)} />

                  <Form.Label>Téléphone du participant</Form.Label>
                  <Form.Control className="mb-3" value={telParticipant} onChange={(event) => setTelParticipant(event.target.value)} />

                  <Form.Label>Résponsable légal du participant</Form.Label>
                  <Form.Control className="mb-3" value={responsablelegalParticipant} onChange={(event) => setResponsablelegalParticipant(event.target.value)} />

                  <Form.Label>Numéro sécurité sociale du participant</Form.Label>
                  <Form.Control className="mb-3" value={securitesocialeParticipant} onChange={(event) => setSecuritesocialeParticipant(event.target.value)} />

                </Col>

                <Col>
                  <Form.Label>Espèces ou chèque </Form.Label>
                  <Form.Select className="mb-3" value={typeParticipation} onChange={(e) => setTypeParticipation(e.target.value)}>
                    <option>Type de participation</option>
                    <option value="especes">Espèces</option>
                    <option value="cheque">Chèque</option>
                  </Form.Select>

                  <Form.Label>Participation </Form.Label>
                  <Form.Control className="mb-3" value={participation} type="number" placeholder="€" onChange={(event) => setParticipation(event.target.value)} />

                  <Form.Label>Subvention</Form.Label>
                  <Form.Control className="mb-3" value={subvention} type="number" placeholder="€" onChange={(event) => setSubvention(event.target.value)} />

                  <Form.Label>Autofinancement</Form.Label>
                  <Form.Control className="mb-3" value={autofinancement} type="number" placeholder="€" onChange={(event) => setAutofinancement(event.target.value)} />

                  <Form.Label>Prix séjour total</Form.Label>
                  <Form.Control className="mb-3" value={totalPrixSejour} type="number" placeholder="€" onChange={(event) => setTotalPrixSejour(event.target.value)} />

                  <div className="text-center">
                    <Button variant="outline-dark" type="submit">Créer séjour</Button>
                  </div>

                </Col>
              </Row>
            </Form>
          </div>
        </Col>
        <Col className="g-0 p-2">
          <div className="rightside" style={{ height: 800, width: '100%' }}>
            <DataGrid className={classes.root}      //Ce className = enlever le blue outline
              rows={listeSejours}
              columns={columns}
              pageSize={20}
              getRowId={(row) => row._id}
              disableSelectionOnClick/>
          </div>
        </Col>
      </Row>
    </>

  )
}