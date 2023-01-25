import { useContext, useEffect, useState } from "react";
import "./newList.css";
// import { createMovie, getMovies } from "../../context/movieContext/apiCalls";
// import { MovieContext } from "../../context/movieContext/MovieContext";
import { ListContext } from "../../context/listContext/ListContext";
import { createList } from "../../context/listContext/apiCalls";
import { useHistory } from "react-router-dom";

export default function NewList() {
  const [list, setList] = useState(null);
  const history = useHistory()

  const { dispatch } = useContext(ListContext);
  // const { movies, dispatch: dispatchMovie } = useContext(MovieContext);

  // useEffect(() => {
  //   getMovies(dispatchMovie);
  // }, [dispatchMovie]);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  // const handleSelect = (e) => {
  //   let value = Array.from(e.target.selectedOptions, (option) => option.value);
  //   setList({ ...list, [e.target.name]: value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    createList(list, dispatch);
    history.push("/lists")
  };

  return (
    <div className="newProduct">
      
      <form className="addListForm">
      <div className="cont">
      <h1 className="addProductTitle">New List</h1>
        <div className="form">
          <div className="addListItem">
            <label>Title</label>
            <input
              type="text"
              className="select"
              placeholder="Popular Movies"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="addListItem">
            <label>Description</label>
            <textarea
              type="text"
              className="select"
              placeholder="Describe your movie"
              name="description"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="addListItem">
            <label>Genre</label>
            <select name='genre' id='genre' className="select" onChange={handleChange}>
                <option value='Drama'>Drama</option>
                <option value='Documentary'>Action</option>
                <option value='Adventure'>Adventure</option>
                <option value='Comedy'>Comedy</option>
                <option value='Crime'>Crime</option>
                <option value='Fantasy'>Fantasy</option>
                <option value='Historical'>Historical</option>
                <option value='Horror'>Horror</option>
                <option value='Romance'>Romance</option>
                <option value='Sci-fi'>Sci-fi</option>
                <option value='Thriller'>Thriller</option>
                <option value='Cartoons'>Cartoons</option>
                <option value='Documentary'>Documentary</option>
            </select>
          </div>
          <div className="addListItem">
            <label>Type</label>
            <select name="type" className="select" onChange={handleChange}>
              <option>Type</option>
              <option value="Movie">Movie</option>
              <option value="Series">Series</option>
            </select>
          </div>
          <div className="form-button">
            <button className="addButton" onClick={handleSubmit}>
              Create
            </button>
          </div>
        </div>
        </div>
      </form>
    </div>
  );
}
