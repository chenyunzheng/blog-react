import React, { Component } from "react";
import { formatDate } from "./../utils/date";

class CommentsView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { comments } = this.props;
    return (
      <ul className="commentsView">
        {comments.map(item => 
          (
            <li key={item.id}>
              <div>{item.content}</div>
              <div className="sub">
                <span>{item.author.username}</span>
                <span>.</span>
                <span>{formatDate(item.updateAt)}</span>
              </div>
            </li>
          )
        )}
      </ul>
    );
  }
}

export default CommentsView;
