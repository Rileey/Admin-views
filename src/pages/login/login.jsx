import React, { useContext, useState } from "react";
import { Visibility, VisibilityOff } from '@material-ui/icons'
import "./login.css";
import { AuthContext } from "../../context/authContext/AuthContext";
import { login } from "../../context/authContext/apiCalls";
import { useHistory } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false)
  const { isFetching, dispatch } = useContext(AuthContext);
  const history = useHistory()

  
  const handleShowHide = () => {
    setShow(!show)
  }

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
    history.push('/')
  };

  return (
    <div className="login">
      <form className="loginForm">
      <p className="admin">Login (Administrator)</p>
        <input
          type="text"
          placeholder="email"
          className="loginInput"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className='input-password'>
          <input
            type={show ? "text" : "password"}
            placeholder="password"
            className="loginInput"
            onChange={(e) => setPassword(e.target.value)}
          />
          {
            show ? (
                <span className='visibility' onClick={handleShowHide}><VisibilityOff /></span>
            ) : (
                <span className='visibility' onClick={handleShowHide}><Visibility /></span>
            )
          }
        </div>
        
        <button
          className="loginButton"
          onClick={handleLogin}
          disabled={isFetching}
        >
          Login
        </button>
      </form>
    </div>
  );
}
