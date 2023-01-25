import axios from "axios";
import { API_URL } from "../../BaseUrl/baseurl";
import authHeader from "../../services/auth-header";
import {
  createUserStart,
  createUserSuccess,
  createUserFailure,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
} from "./UserActions";

export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const {data} = await axios.get( API_URL + "user/allusers", { headers: authHeader() });
    dispatch(getUsersSuccess(data?.data?.users));
  } catch (err) {
    dispatch(getUsersFailure());
  }
};

// create
export const createUser = async (user, dispatch) => {
  dispatch(createUserStart());
  try {
    const res = await axios.post( API_URL + "user/admin/createUser", user, { headers: authHeader() });
    dispatch(createUserSuccess(res.data));
  } catch (err) {
    dispatch(createUserFailure());
  }
};

//delete
export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await axios.delete(API_URL + "user/" + id, { headers: authHeader() });
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};
