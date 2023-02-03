import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
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
