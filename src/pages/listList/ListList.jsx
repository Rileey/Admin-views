import "./listList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { deleteList, getLists } from "../../context/listContext/apiCalls";
import { ListContext } from "../../context/listContext/ListContext";
import { listRows, userRows } from "../../dummyData";

export default function ListList() {
  const { lists, dispatch } = useContext(ListContext);

  // const data = listRows;

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);


  const handleDelete = (id) => {
    deleteList(id, dispatch);
    window.location.reload()
  };

  const columns = [
    { field: "id", headerName: "ID", width: 250 },
    { field: "title", headerName: "title", width: 250 },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "type", headerName: "type", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{ pathname: "/list/" + params.row.id, list: params.row }}>
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
        rows={lists}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        getRowId={(r) => r.id}
      />
    </div>
  );
}
