import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import image from '../../images/stockphoto.jpeg'

export default function WidgetSm() {

  const [newusers, setNewusers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
      const res = await axios.get('/users?new=true', {
        headers: {
          token: 'Bearer '+ JSON.parse(localStorage.getItem('user')).accessToken 
        }
        })
        setNewusers(res.data);
      } catch (err) {
      console.log(err)
      }
    }
    getNewUsers()
  }, [])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Users</span>
      <ul className="widgetSmList">
        {newusers.map(user => (

        
        <li className="widgetSmListItem">
          <img
            src={user.profilePicture[0]?.profilePicture || image}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">
              {user.email}</span>
          </div>
        </li>
        ))} 
      </ul>
    </div>
  );
}
