import React from "react";
import { blogImg } from "../../assets/assests";
import { Link } from "react-router";

const Posts = ({ post }) => {
  return (
    <>
      <div className="post-img">
        <img src={blogImg} alt={post.title} />
      </div>
      <div className="post-title">
        <p>{post.title}</p>
      </div>
      <div className="post-link">
        <Link to={`/post/${post.id}`}>view more..</Link>
      </div>
    </>
  );
};

export default Posts;
