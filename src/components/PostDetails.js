import React from 'react';
import { formatDate } from './../utils/date';
import like from '../images/like.png';
import './PostDetails.css'

function PostDetails(props) {
  const { post, editable, onEditClick, onVote } = props;
  return (
    <div className="postDetails">
      <div>
        <h2>{post.title}</h2>
        <div className="mark">
          <span className="author">{post.author.username}</span>
          <span>.</span>
          <span>{formatDate(post.updatedAt)}</span>
          {editable ? (
            <span>
              .<button onClick={onEditClick}>编辑</button>
            </span>
          ) : null}
        </div>
        <div className="content">{post.content}</div>
      </div>
      <div className="vote">
        <span onClick={onVote}>
          <img alt="vote" src={like} />
        </span>
        <span>{post.vote}</span>
      </div>
    </div>
  );
}
 
export default PostDetails;