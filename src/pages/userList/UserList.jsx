import "./userList.css";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext/userContext"
import { deleteUsers, getUsers } from "../../context/userContext/apiCalls";
import axios from 'axios';
import image from '../../images/stockphoto.jpeg'

export default function UserList() {
  const {users, dispatch} = useContext(UserContext)
  const [searched, setSearched] = useState('')
  const [rows, setRows] = useState([])

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch])

  
  if (users === [] || users.length === 0){
    return null
  }

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  const handleDelete = (id) => {
    deleteUsers(id, dispatch)
  }
  
  const columns = [
    // { field: "id", headerName: "ID", width: 200 },
    {
      field: "username",
      headerName: "Userame",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            { params.row.username }
          </div>
        );
      },
    },
    {
      field: "number",
      headerName: "Number",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            +234 { params.row.phoneNumber }
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 250, 
    renderCell: (params) => {
      return (
        <div className="userListUser">
          <img className="userListImg" src={params.row.profilePicture[0]?.profilePicture || image} alt="" />
          { params.row.email }
        </div>
      );
    }, },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={{pathname: "/user/" + params.row._id, user: params.row}}>
              <button className="userListEdit">View</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <div className="top-container">
        <Link to="/newUser">
          <button className="userAddButton1">Create</button>
        </Link>
      </div>  
      <DataGrid
        rows={users}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        components={{Toolbar: GridToolbar}}
        checkboxSelection
        getRowId={(r) => r._id}
      />
    </div>
  );
}
