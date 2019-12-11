import React, { Component } from 'react';
import { get, put, post } from '../utils/request';
import url from '../utils/url';
import PostEditor from '../components/PostEditor';
import CommentList from './CommentList';
import PostDetails from './../components/PostDetails';
import { formatDate } from './../utils/date';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            post: {},
            comments: [],
            editing: false
        }
        this.refreshComments = this.refreshComments.bind(this);
        this.refreshPost = this.refreshPost.bind(this);
        this.handlePostSave = this.handlePostSave.bind(this);
        this.handlePostCancel = this.handlePostCancel.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.handleVote = this.handleVote.bind(this);
    }

    componentDidMount(){
        this.refreshComments();
        this.refreshPost();
    }

    // 获取Post详情
    refreshPost(){
        const postId = this.props.match.params.id;
        get(url.getPostById(postId)).then(data => {
            if (!data.error && data.length === 1) {
                this.setState({
                    post: data[0]
                })
            }
        })
    }

    // 获取评论列表
    refreshComments(){
        const postId = this.props.match.params.id;
        get(url.getComments(postId)).then(data => {
            if (!data.error) {
                this.setState({
                    comments: data
                })
            }
        })
    }

    // 复用PostEditor，保存更改
    handlePostSave(data){
        const postId = this.props.match.params.id;
        put(url.updatePost(postId), data).then(resdata => {
            if (!resdata.error) {
                const newPost = {...data, author: this.state.post.author, updatedAt: formatDate(new Date().toString())}
                this.setState({
                    post: newPost,
                    editing: false
                })
            }
        })
    }

    handlePostCancel(){
        this.setState({
            editing: false
        })
    }

    handleEditClick(){
        this.setState({
            editing: true
        })
    }

    handleCommentSubmit(content){
        const postId = this.props.match.params.id;
        const username = this.props.username;
        const comment = {
            postId: postId,
            content: content,
            author: username,
            createdAt: formatDate(new Date().toString())
        };
        post(url.createComment(), comment).then(data => {
            if (!data.error) {
                this.refreshComments();
            }
        })
    }

    handleVote(){
        const {post} = this.state;
        const newPost = {...post, vote: post.vote + 1};
        this.setState({
            post: newPost
        })
        put(url.addVote(post.id), newPost).then(data => {
            if (data.error) {
                alert("vote error")
            }
        })
    }

    render() { 
        const {post, comments, editing} = this.state;
        const {username} = this.props;
        if (Object.keys(post).length === 0) {
            return null;
        }
        const editable = username === post.author.username;
        return ( 
            <div className="post">
                {
                    editing ? (
                        <PostEditor post={post} onSave={this.handlePostSave} onCancel={this.handlePostCancel} />
                    ) : (
                        // 改由PostDetails展示
                        <PostDetails post={post} editable={editable} onEditClick={this.handleEditClick} onVote={this.handleVote} />
                    )
                }
                <CommentList comments={comments} editable={Boolean(username)} onSubmit={this.handleCommentSubmit} /> 
            </div>
         );
    }
}
 
export default Post;