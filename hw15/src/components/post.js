import React from 'react';

import './reset.css';
import './post.css';
import valid from "../icons/valid.svg";
import arrow from "../icons/arrow.svg";
import like from "../icons/like.svg";
import share from "../icons/share.svg";
import repost from "../icons/repost.svg";
import comments from "../icons/comments.svg";

function Post(props) {
  return (
    <div class="post">
        <div  class="user_avatar">
            <img src={props.author.photo} alt="user avatar"/>
        </div>
        <div class="post_content">
            <div class="user_info">
                <h3>{props.author.name}</h3> 
                <div class="valid_icon">
                    <img src={valid} alt="valid icon" class="valid" />
                </div>
                <div class="post_author_info">
                    <span>{props.author.nickname} </span>
                    <span>&#8226;</span>
                    <span>{props.date}</span>
                </div>
                <div class="arrow_icon">
                    <img src={arrow} alt="valid icon" class="valid" />
                </div>
            </div>
            <div class="post_text">
                <p>{props.content}</p>
            </div>
            <div class="post_image">
                <img src={props.image} alt="post image"/>
            </div>
            <div class="action_list">
                <div class="action_item">
                    <img src={like} alt="like icon"/>
                    <span>482</span>
                </div>
                <div class="action_item">
                    <img src={repost} alt="repost icon"/>
                    <span>146</span>
                </div>
                <div class="action_item">
                    <img src={comments} alt="comments icon"/>
                    <span>882</span>
                </div>
                <div class="action_item">
                    <img src={share} alt="share icon"/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Post;