import "./filelist.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FileContext } from "../../context/fileContext/FileContext";
import { deleteFile, getFiles } from "../../context/fileContext/apiCalls";

export default function FileList() {
  const { files, dispatch } = useContext(FileContext);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
     getFiles(dispatch);
     setLoading(false)

  }, [dispatch])

  const handleDelete = (id) => {
    deleteFile(id, dispatch);
    // window.location.reload()
  };

  if (files === [] || files.length === 0){
    return null
  }


  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "file",
      headerName: "File",
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
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "duration", headerName: "Duration", width: 120 },
    { field: "director", headerName: "Director", width: 120 },
    { field: "age_rating", headerName: "AgeRating", width: 120 },
    

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{ pathname: "/file/" + params.row.id, file: params.row }}>
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
      <Link to="/newFile">
          <button className="productAddButton">Create File</button>
      </Link>
      <DataGrid
        rows={files}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r.id}
      />
    </div>
  );
}
