import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import "./movie.css";
import { Publish } from "@material-ui/icons";
import { useContext, useState } from "react";
import { FileContext } from "../../context/fileContext/FileContext";
import axios from "axios";
import { API_URL } from "../../BaseUrl/baseurl";
import authHeader from "../../services/auth-header";

export default function Movie() {
  const location = useLocation();
  const movie = location.movie;
  const history = useHistory()

  const [file, setFile] = useState(null);
  const [video, setVideo] = useState({})
  const [isLoading, setisLoading] = useState(false)

  const { dispatch } = useContext(FileContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setFile({ ...file, [e.target.name]: value });
    console.log({ ...file, [e.target.name]: value })
  }

  const {movieId} = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true)
    // createFile(file, dispatch);
    let formdata = new FormData()
    formdata.append('name', movie.name)
    formdata.append('description', movie.description)
    formdata.append('director', movie.director)
    formdata.append('age_rating', movie.age_rating)
    formdata.append('genre', movie.genre)
    for (let i = 0; i < video.length; i++) {
      console.log(video, video[i])
      formdata.append('video', video[i])
      }

    const response =  await axios.post(API_URL +'moviefile/' + movieId, formdata, { headers: authHeader() })
    console.log(response, 'responsee')
    setisLoading(false)
    history.push('/files')
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src="" alt="" className="productInfoImg" />
            <span className="productName">{movie.name}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">'id</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{movie.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">year:</span>
              <span className="productInfoValue">{movie.year}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">limit:</span>
              <span className="productInfoValue">{movie.age_rating}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Title</label>
            <input type="text" placeholder='title' />
            <label>Year</label>
            <input type="text" placeholder='year' />
            <label>Genre</label>
            <input type="text" placeholder='genre' />
            <label>Limit</label>
            <input type="text" placeholder='limit' />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src=""
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">{isLoading ? "Please Wait..." : "Upload"}</button>
          </div>
        </form>
      </div>




      <div className="newProduct">
      <h1 className="addProductTitle">New File</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Video</label>
          <input
            type="file"
            id="img"
            name="img"
            onChange={(e) => setVideo(e.target.files)}
          />
        </div>
        {/* <div className="addProductItem">
          <label>Title image</label>
          <input
            type="file"
            id="imgTitle"
            name="imgTitle"
            // onChange={(e) => setPreview(e.target.files[0])}
          />
        </div> */}
        <div className="addProductItem">
          <label>Preview (nullable)</label>
          <input
            type="file"
            id="imgSm"
            name="imgSm"
            // onChange={(e) => setImgSm(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input
            type="text"
            placeholder="John Wick"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            type="text"
            placeholder="description"
            name="description"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>AgeRating</label>
          <input
            type="text"
            placeholder="age_rating"
            name="age_rating"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Director</label>
          <input
            type="text"
            placeholder="Director"
            name="director"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input
            type="text"
            placeholder="Genre"
            name="genre"
            onChange={handleChange}
          />
        </div>
          <button className="addProductButton" onClick={handleSubmit}>
          {isLoading ? "Please Wait..." : "Create"}
          </button>
      </form>
    </div>





    </div>
  );
}
