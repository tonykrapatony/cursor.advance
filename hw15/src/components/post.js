import React from 'react';
//import './Post.css';
//import IconValid from "./svg-icons/IconValid";
//import IconComment from "./svg-icons/IconComment";
//import IconLike from "./svg-icons/IconLike";
//import IconRetweet from "./svg-icons/IconRetweet";
//import IconShare from "./svg-icons/IconShare";

function Post(props) {
  return (
    <div className  ="post">
      <img src={props.author.photo} alt="user-avatar" className = "user-avatar" /> 
      <p>{props.author.name} <img src="images/likes.svg"/> </p>
    </div>
  );
}

export default Post;