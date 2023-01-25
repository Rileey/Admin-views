import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import "./list.css";
import { Publish } from "@material-ui/icons";
import { useContext, useState } from "react";
import { MovieContext } from "../../context/movieContext/MovieContext";
import axios from "axios";
import { API_URL } from "../../BaseUrl/baseurl";
import authHeader from "../../services/auth-header";
import { Tag } from "./ListComponent";

export default function List() {
  const [movie, setMovie] = useState({});
  const [tags, setTags] = useState([])

  const location = useLocation();
  const list = location?.list;
  console.log(list)

  const history = useHistory()

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
    console.log(movie)
  };
  const {listId} = useParams()


  const handleSubmit = async (e) => {
    e.preventDefault();
    let formdata = new FormData()
    formdata.append('name', movie.name)
    formdata.append('description', movie.description)
    formdata.append('director', movie.director)
    formdata.append('year', movie.year)
    formdata.append('age_rating', movie.age_rating)
    formdata.append('genre', movie.genre)
    formdata.append('type', movie.type)
    tags.forEach(tag=> {formdata.append('tags[]', tag)})


    await axios.post(API_URL +'movie/' + listId, formdata,{ headers: authHeader() })

    history.push('/movies')
  };

	const updateTags = (key, value) => console.log({...tags, [key]: setTags(value)})

  const addTags = (e) => {
    e.preventDefault()
		// if (e.key === "Enter") {
			const {value} = e.target
			updateTags('tags', [...tags, value])
      console.log([...tags,value])
			e.target.value = "";
		// }
	}
	const removeTag = (index) => {
		const _tags = Array.isArray(tags) ? tags.filter((_, i) => i !== index) : []
    console.log(_tags)
		updateTags('tags', _tags)
	}
	const tag = ['Action','Science Fiction','Crime','Horror','Western','Adventure','Fantasy','History','Drama','Suspense','Comedy','Thriller','Romance',"90's",'Peroid']
  console.log(tags)

 
  return (
    <>
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">{list?.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{list?.id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{list?.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">type:</span>
              <span className="productInfoValue">{list?.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>List Title</label>
            <input type="text" placeholder={list?.title} />
            <label>Type</label>
            <input type="text" placeholder={list?.type} />
            <label>Genre</label>
            <input type="text" placeholder={list?.genre} />
          </div>
          <div className="productFormRight">
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>






      <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm" onClick={handleSubmit}>
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
          <label>Type</label>
          <select name="type" id="type" onChange={handleChange}>
            <option value="Movie">Movie</option>
            <option value="Series">Series</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input
            type="text"
            placeholder="Year"
            name="year"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <div className="contain">
          {/* {tags?.map((tag, index) => {
							return <Tag title={tag} key={'tag'}
								 onClick={() => removeTag(index)}
                 />
          })} */}
          </div>
          <label>Tags</label>
          <select onChange={addTags} name="tags" id="tags">
            {tag.map((tag)=><option value={tag}>{tag}</option>)}
          </select>
          {/* <input list="tags" name="tags" id="tags" onKeyPress={addTags}/> */}
        </div>
        <div className="addProductItem">
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
          <label>Age Rating</label>
          <input
            type="text"
            placeholder="age_rating"
            name="age_rating"
            onChange={handleChange}
          />
        </div>
       
        {/* <div className="addProductItem">
          <label>Trailer</label>
          <input
            type="file"
            name="trailer"
            onChange={(e) => setTrailer(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input
            type="file"
            name="video"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </div> */}
          <button className="addProductButton" >
            Create
          </button>
      </form>
    </div>
    </div>

    </>
  );
}

export const NewMovie = () => {
  


  

  


}