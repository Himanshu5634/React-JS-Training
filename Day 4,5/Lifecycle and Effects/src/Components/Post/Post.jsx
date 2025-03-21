import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { blogImg } from "../../assets/assests";

const Post = () => {
  const { postId = 1 } = useParams();
  const [post, setPost] = useState({});
  
  /**
   * @description - find post using prams postId
   * @returns {Promise<void>}
   */
  // use try catch
  const handlePost = async () => {
   try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${decodeURI(postId)}`
    );
    const data = await response.json();
    setPost(data);
   } catch (error) {
    console.log(error);
   }
  };

  useEffect(() => {
    handlePost();
  }, []);

  const { title = "", body = "" ,HANDLERfUNC=()=>{}} = post;
  
  return (
    <div className="post-container">
      <div className="post">
        <div className="post-image">
          <img src={blogImg} alt="" />
        </div>
        <div className="post-contant">
          <div className="post-title">
            <h2>{title}</h2>
          </div>
          <div className="discription">{body}</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
