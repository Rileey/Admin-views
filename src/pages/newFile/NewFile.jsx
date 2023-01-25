import { useContext, useState } from "react";
import { ListContext } from "../../context/listContext/ListContext";
import { MovieContext } from "../../context/movieContext/MovieContext";
import "./newFile.css";
// import { createMovie } from "../../context/movieContext/apiCalls";
// import { MovieContext } from "../../context/movieContext/MovieContext";

export default function NewFile() {
  const [movie, setMovie] = useState(null);

  const { dispatch } = useContext(MovieContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // createMovie(movie, dispatch);
  };

  // return (
   
  // );
}
