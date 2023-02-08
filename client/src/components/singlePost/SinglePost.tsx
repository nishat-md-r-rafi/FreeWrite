import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        
        <img src="https://images.pexels.com/photos/12509001/pexels-photo-12509001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="singlePostImg" />
        
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            Free Time
            
            <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                ></i>
              </div>
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <b>Rafi</b>
          </span>
          <span className="singlePostDate">
            {new Date().toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque minima et laboriosam asperiores voluptate autem non quas, veritatis error sint aperiam architecto cupiditate, in deserunt sit iure, quis ex quo consequatur praesentium consectetur! Mollitia aliquid delectus modi adipisci voluptate quasi labore dolore esse minus optio hic quisquam, blanditiis, nostrum quas.</p>
        )}
        
        <button className="singlePostButton">
          Update
        </button>
      </div>
    </div>
  );
}
