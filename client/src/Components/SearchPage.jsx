import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit'; //Utiliser cette import au lieu de l'original pour la derniere version hotfixed
import paginationFactory from "react-bootstrap-table2-paginator";

import Context from "../Context";

export default function SearchPage() {

  const [data, setData] = useState([]);
  const { token, inscrSejourContext, setInscrSejourContext } = useContext(Context);

  const { SearchBar } = Search;

  useEffect(() => 
  {
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
    { dataField: 'dateSaisie', text: 'Date séjour', type: "date", sort: true },
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
              />
            </div>
          )
        }
      </ToolkitProvider>
    </div>
  )
}
