import { Link, useLocation } from "react-router-dom";
import "./file.css";
import { Publish } from "@material-ui/icons";

export default function Movie() {
  const location = useLocation();
  const movie = location.movie;
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
            <span className="productName">title</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">'id</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">genre</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">year:</span>
              <span className="productInfoValue">year</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">limit:</span>
              <span className="productInfoValue">limit</span>
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
            <label>Trailer</label>
            <input type="file" placeholder='trailer' />
            <label>Video</label>
            <input type="file" placeholder='video' />
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
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
