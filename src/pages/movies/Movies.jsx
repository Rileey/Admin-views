import "./movies.css";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";

import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from 'axios'
import { MovieContext }  from '../../context/movieContext/movieContext'
import { deleteMovie, getMovies } from '../../context/movieContext/apiCalls'

export default function Movies() {
  const {movies, dispatch} = useContext(MovieContext)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
     getMovies(dispatch);
     setLoading(false)

  }, [dispatch])



  const handleDelete = (id) => {
    deleteMovie(id, dispatch)
  };

  const columns = [
    // { field: "_id", headerName: "ID", width: 100 },
    {
      field: "title",
      headerName: "Title",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "year", headerName: "Year", width: 120 },
    { field: "ageLimit", headerName: "AgeLimit", width: 120 },
    { field: "isSeries", headerName: "Series", width: 120 },
    { field: "director", headerName: "Director", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{pathname: "/movie/" + params.row._id, movie: params.row}}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <Link to="/newmoviepage1">
          <button className="productAddButton1">Create Movie</button>
        </Link>
          <DataGrid
            rows={movies}
            disableSelectionOnClick
            columns={columns}
            components={{Toolbar: GridToolbar}}
            pageSize={8}
            checkboxSelection
            getRowId={(r) => r._id}
          />
    </div>
  );
}
