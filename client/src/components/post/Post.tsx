import "./post.css";
import { Link } from "react-router-dom";

interface PostProps{
  _id: string;
  title: string,
  desc: string,
  photo: string,
  username: string,
  categories: string[],
  createdAt: string,
  updatedAt: string
}

export default function Post(props: PostProps) {
  console.log(props)
  const PF = "http://localhost:5000/images/";
  return (
    <div className="post">
      {/* {post.photo && <img className="postImg" src={PF + post.photo} alt="" />} */}
      <img className="postImg" src={props.photo} alt="" />
      <div className="postInfo">
        <div className="postCats">
          {props.categories.map((c) => (
          <span className="postCat">{c}</span>
          ))}
        </div>
        <Link to={`/post/${props._id}`} className="link">
          <span className="postTitle">{props.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date().toDateString()}
        </span>
      </div>
      <p className="postDesc">{props.desc}
      </p>
    </div>
  );
}
