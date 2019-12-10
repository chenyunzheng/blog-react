import React from "react";
import { formatDate } from "./../utils/date";
import like from "../images/like.png";
import './PostItem.css';

function PostItem(props) {
  const { post } = props;
  return (
    <li className="postItem">
      <div className="title">{post.title}</div>
      <div>
        创建人：<span>{post.author.username}</span>
      </div>
      <div>
        更新时间：<span>{formatDate(post.updatedAt)}</span>
      </div>
      <div className="like">
        <span>
          <img src={like} alt="vote" />
        </span>
        <span>{post.vote}</span>
      </div>
    </li>
  );
}

export default PostItem;
