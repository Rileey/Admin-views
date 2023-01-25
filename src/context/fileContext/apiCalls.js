import axios from "axios";
import { API_URL } from "../../BaseUrl/baseurl";
import authHeader from "../../services/auth-header";
import {
  createFileFailure,
  createFileStart,
  createFileSuccess,
  deleteFileFailure,
  deleteFileStart,
  deleteFileSuccess,
  getFilesFailure,
  getFilesStart,
  getFilesSuccess,
} from "./FileActions";

export const getFiles = async (dispatch) => {
  dispatch(getFilesStart());
  try {
    const {data} = await axios.get( API_URL + "moviefile/all", { headers: authHeader() });
    console.log(data?.data?.data)
    dispatch(getFilesSuccess(data?.data?.data));
  } catch (err) {
    dispatch(getFilesFailure());
  }
};

//create
export const createFile = async (movie, dispatch) => {
  dispatch(createFileStart());
  try {
    const res = await axios.post( API_URL + "/movie", movie, { headers: authHeader() });
    dispatch(createFileSuccess(res.data));
  } catch (err) {
    dispatch(createFileFailure());
  }
};

//delete
export const deleteFile = async (id, dispatch) => {
  dispatch(deleteFileStart());
  try {
    await axios.delete(API_URL + "moviefile/" + id, { headers: authHeader() });
    dispatch(deleteFileSuccess(id));
  } catch (err) {
    dispatch(deleteFileFailure());
  }
};
