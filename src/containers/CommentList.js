import React, { Component } from 'react';
import CommentsView from '../components/CommentsView';

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            value: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e){
        this.setState({
            value: e.target.value
        })
    }

    handleClick(){
        const comment = this.state.value;
        if (comment.length === 0) {
            alert("评论内容不能为空！")
        } else {
            this.props.onSubmit(comment);
            this.setState({
                value: ""
            })
        }
    }

    render() { 
        const {comments, editable} = this.props;
        return ( 
            <div className="commentList">
                <div className="title">评论</div>
                {/* 登录后才能评论 */}
                {
                    editable ? (
                        <div className="editor">
                            <textarea placeholder="说说你的看法" value={this.state.value} onChange={this.handleChange} />
                            <button onClick={this.handleClick}>提交</button>
                        </div>
                    ) : null
                }
                <CommentsView comments={comments} />
            </div>    
        );
    }
}
 
export default CommentList;