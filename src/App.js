import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Login from "./pages/login/Login";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";
import MovieList from "./pages/movieList/MovieList";
import Movie from "./pages/movie/Movie.jsx"
import NewMovie from "./pages/newMovie/NewMovie";
import FileList from "./pages/fileList/fileList";
import File from "./pages/file/File.jsx"
import NewFile from "./pages/newFile/NewFile.jsx"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login"><Login /></Route>
        {/* {user && ( */}
          <>
            <Topbar />
            <div className="container">
              <Sidebar />
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <UserList />
              </Route>
              <Route path="/user/:userId">
                <User />
              </Route>
              <Route path="/newUser">
                <NewUser />
              </Route>
              <Route path="/movies">
                <MovieList />
              </Route>
              <Route path="/movie/:movieId">
                <Movie />
              </Route>
              <Route path="/newMovie">
                <NewMovie />
              </Route>
              <Route path="/files">
                <FileList />
              </Route>
              <Route path="/file/:fileId">
                <File />
              </Route>
              <Route path="/newFile">
                <NewFile />
              </Route>
              <Route path="/list/:listId">
                <List />
              </Route>
              <Route path="/lists">
                <ListList />
              </Route>
              <Route path="/newlist">
                <NewList />
              </Route>
            </div>
          </>
        {/* )} */}
      </Switch>
    </Router>
  );
}

export default App;
