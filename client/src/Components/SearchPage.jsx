import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit'; //Utiliser cette import au lieu de l'original pour la derniere version hotfixed
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";

import Context from "../Context";

export default function SearchPage() {
  const { token, inscrSejourContext, setInscrSejourContext } = useContext(Context);

  const [data, setData] = useState([]); 

  // const [IdRow, setIdRow] = useState("");
  // const [foundElement, setFoundElement] = useState("");

  const { SearchBar } = Search;


  useEffect(() => {
    getData();
    setInscrSejourContext(null); //on reset le Context a null
  }, [inscrSejourContext])


  const getData = () => {
    axios("/api/sejour/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err.response))
  }

  const columns = [
    { dataField: "type", text: "Type sejour", sort: true },
    { dataField: "nomParticipant", text: "Nom", sort: true },
    { dataField: "prenomParticipant", text: "Prenom", sort: true },
    { dataField: 'dateSaisie', text: 'Date séjour', sort: true },
    { dataField: 'typeParticipation', text: 'Type participation', sort: true },
    { dataField: 'totalPrixSejour', text: 'Prix total', sort: true },
    {
      dataField: "remove",
      text: "",
      formatter: (cellContent, row) => {
        if (token) {
          return (
            <button
              className="btn btn-danger btn-xs"
              onClick={() => handleDelete(row)}>Delete</button >)
        }
        ;
      },
    },
  ];

  const handleDelete = (row) => {
    const config = {
      headers: { "Authorization": `Bearer ${token}` },
    };

    axios.delete(`/api/sejour/${row._id}`, config)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));

    setInscrSejourContext(false);
  };


  const handleChange = (oldValue, newValue, row) => {

    const idRow = row._id;

    let foundElement = null;

    data.forEach(element => {
      if (element._id == idRow) {
        foundElement = element;
      }
    });

    const config = {
      headers: { "Authorization": `Bearer ${token}` },
    };

    axios
      .put(`/api/sejour/update/${foundElement._id}`, foundElement, config)
      .then((result) => console.log(result))
      .catch((err) => console.log(err.response.data))

    setInscrSejourContext(true);
  }



  // const updateSejour = (oldValue, newValue, row) => {

  //   // let sejour = {
  //   //   nomParticipant
  //   // };

  //   // let [nomParticipant, type] = data;

  //   // let sejour = { nomParticipant, type };




  //   // fetch(`/api/sejour/update/${row._id}`, {
  //   //   method: "PUT",
  //   //   body: JSON.stringify(sejour),
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //     Authorization: `Bearer ${token}`,
  //   //   },
  //   // })
  //   //   .then((data) => data.json())
  //   //   .then((resultat) => console.log(resultat))
  //   //   .catch((erreur) => console.log(erreur));
  // };


  //-----------------------------------------------------------------------
  //Droits d'admin pour la datagrid, si token existe ajouter Edit & Delete
  // const handleIfAdmin = () => {
  //   if (token) {
  //     columns.push({
  //       field: "action", headerName: "", width: 100,
  //       renderCell: (params) => {
  //         return (
  //           <>
  //             <button className="sejoursEdit">Edit</button>
  //             <DeleteOutline className="sejoursDelete" onClick={() => handleDelete(params.row._id)} />
  //           </>
  //         )
  //       }
  //     });
  //   }
  // }
  // handleIfAdmin(); //Appelle de la fonction a chaque render
  //-----------------------------------------------------------------------

  return (
    <div>
      <ToolkitProvider
        keyField="_id"
        data={data}
        columns={columns}
        search
      >
        {
          props => (
            <div align="center">
              <SearchBar {...props.searchProps} />
              <hr />
              <BootstrapTable
                {...props.baseProps}
                hover
                condensed
                striped
                pagination={paginationFactory()}
                cellEdit={cellEditFactory({
                  mode: "dbclick",
                  blurToSave: true,
                  // afterSaveCell: updateSejour
                  afterSaveCell: handleChange
                })}
              />
            </div>
          )
        }
      </ToolkitProvider>
    </div>
  )
}
