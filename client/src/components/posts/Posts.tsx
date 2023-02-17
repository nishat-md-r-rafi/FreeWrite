import Post from "../post/Post";
import {useDispatch} from 'react-redux'
import "./posts.css";
import loadContentData from "../../redux/thunk/content/loadContent";
import { useEffect } from 'react';

export default function Posts() {

  const dispatch = useDispatch<any>()
  // useEffect(() => {
  //   dispatch(loadContentData())
  // }, [])

  const blogs = dispatch(loadContentData());
  console.log(blogs)

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
