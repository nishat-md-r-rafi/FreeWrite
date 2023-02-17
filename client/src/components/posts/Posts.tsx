import Post from "../post/Post";
import {useDispatch} from 'react-redux'
import "./posts.css";
import loadContentData from "../../redux/thunk/content/loadContent";
import { useEffect, useState } from 'react';
import { loadContent } from "../../redux/actions/contentActions";

export default function Posts() {

  const [contents, setContents] = useState([])

  const dispatch = useDispatch<any>()
  useEffect(() => {
    // fetch("http://localhost:5000/api/post")
    //   .then(response => response.json())
    //   .then(data => dispatch(loadContent(data)))
    dispatch(loadContentData())
    
  }, [])

  // const blogs = dispatch(loadContentData());
  // console.log(contents)

  return (
    <div className="posts">
      {/* {posts.map((p) => (
      ))} */}

      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  );
}
