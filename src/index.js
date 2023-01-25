import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { MovieContextProvider } from "./context/movieContext/MovieContext";
import { ListContextProvider } from "./context/listContext/ListContext";
import { FileContextProvider } from "./context/fileContext/FileContext";
import { UserContextProvider } from "./context/userContext/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ListContextProvider>
        <MovieContextProvider>
          <FileContextProvider>
            <UserContextProvider>
              <App />
            </UserContextProvider>
          </FileContextProvider>
        </MovieContextProvider>
      </ListContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
