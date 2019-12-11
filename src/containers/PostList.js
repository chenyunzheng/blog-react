import React, { Component } from 'react';
import { get, post } from '../utils/request';
import url from '../utils/url';
import PostEditor from './../components/PostEditor';
import PostsView from './PostsView';
import './PostList.css'
import { formatDate } from './../utils/date';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            posts: [],
            newPost: false
        }
        this.refreshPostList = this.refreshPostList.bind(this);
        this.handleNewPost = this.handleNewPost.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentDidMount(){
        this.refreshPostList();
    }

    refreshPostList(){
        //调用api获取post列表数据
        get(url.postList()).then(data => {
            if (!data.error) {
                this.setState({
                    posts: data,
                    newPost: false
                })
            }
        })
    }

    handleNewPost(){
        this.setState({
            newPost: true
        })
    }

    handleSave(data){
        const postData = {
            title: data.title,
            content: data.content,
            author: {
                username: this.props.username
            },
            vote: 0,
            updatedAt: formatDate(new Date().toString())
        };
        post(url.createPost(), postData).then(resdata => {
            if (!resdata.error) {
                //post保存成功，再刷新列表
                this.refreshPostList();
            }
        })
    }

    handleCancel(){
        this.setState({
            newPost: false
        })
    }

    render() { 
        const {userId} = this.props;
        return ( 
            <div className="postList">
                <div>
                    <h2>帖子列表</h2>
                    {/* 登录状态下显示发帖按钮 */}
                    {userId ? <button onClick={this.handleNewPost}>发帖</button> : null}
                </div>
                {/* 若创建新帖子，显示PostEditor组件 */}
                {this.state.newPost ? <PostEditor onSave={this.handleSave} onCancle={this.handleCancel}/> : null}
                {/* 显示帖子列表 */}
                <PostsView posts={this.state.posts}/> 
            </div>
         );
    }
}
 
export default PostList;