import "./movieList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls";

export default function MovieList() {
  const { movies, dispatch } = useContext(MovieContext);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
     getMovies(dispatch);
     setLoading(false)

  }, [dispatch])

  const handleDelete = (id) => {
    deleteMovie(id, dispatch);
    // window.location.reload()
  };

  if (movies === [] || movies.length === 0){
    return null
  }


  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "movie",
      headerName: "Movie",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params?.row?.thumbnail} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "type", headerName: "Type", width: 120 },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "year", headerName: "Year", width: 120 },
    { field: "age_rating", headerName: "AgeRating", width: 120 },
    { field: "director", headerName: "Director", width: 120 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{ pathname: "/movie/" + params.row.id, movie: params.row }}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r.id}
      />
    </div>
  );
}
