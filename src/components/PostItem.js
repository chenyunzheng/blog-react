import React, { Component } from "react";
import { formatDate } from "./../utils/date";
import like from "../images/like.png";

function PostItem(props) {
  const { post } = this.props;
  return (
    <li className="postItem">
      <div className="title">{post.title}</div>
      <div>
        创建人：<span>{post.author.username}</span>
      </div>
      <div>
        更新时间：<span>{formatDate(post.updateAt)}</span>
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
