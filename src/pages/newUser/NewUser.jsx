import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { createUser } from "../../context/userContext/apiCalls";
import { getUsersFailure } from "../../context/userContext/UserActions";
import { UserContext } from "../../context/userContext/UserContext";
import "./newUser.css";

export default function NewUser() {

  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('Create A New User')
  const history = useHistory()

  const { dispatch, error } = useContext(UserContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (error) console.log(error)
      createUser(user, dispatch)
    } catch (error) {
      console.log(error)
    }
    // history.push("/users")
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <p>{message}</p>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>First Name</label>
          <input type="text" name="first_name" placeholder="john" onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>Last Name</label>
          <input type="text" name="last_name" placeholder="Smith" onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" name="email" placeholder="john@gmail.com" onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" name="password" placeholder='password' onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>Status</label>
          <select name='user_type' id='user_type' className="select" onChange={handleChange}>
            <option value='user'>User</option>
            <option value='admin'>Admin</option>
          </select>
        </div>  
        <button className="newUserButton" onClick={handleSubmit}>Create</button>
      </form>
    </div>
  );
}
