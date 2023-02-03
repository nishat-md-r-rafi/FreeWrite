import "./post.css";
import { Link } from "react-router-dom";

export default function Post() {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {/* {post.photo && <img className="postImg" src={PF + post.photo} alt="" />} */}
      <img className="postImg" src="https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
      <div className="postInfo">
        <div className="postCats">
          {/* {post.categories.map((c) => (
          ))} */}
          <span className="postCat">Hello</span>
          <span className="postCat">Gello</span>
        </div>
        {/* <Link to={`/post/${post._id}`} className="link">
        </Link> */}
          <span className="postTitle">title</span>
        <hr />
        <span className="postDate">
          {new Date().toDateString()}
        </span>
      </div>
      <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, repudiandae.</p>
    </div>
  );
}
