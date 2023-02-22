import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

// export const API_URL = 'http://127.0.0.1:8000/api/'

const API_URL = "https://eng.talentcroft.com/api/"

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(API_URL + "user/login", user);
    const currentUser = res?.data?.data?.user
    currentUser?.user_type === 'admin' && dispatch(loginSuccess(res.data))
  } catch (err) {
    dispatch(loginFailure());
  }
};
