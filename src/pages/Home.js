import React, { Component } from 'react';
import Header from '../components/Header';
import { Route } from 'react-router-dom';
import PostList from './../containers/PostList';
import Post from '../containers/Post';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            userId: sessionStorage.getItem("userId"),
            username: sessionStorage.getItem("username")
        }
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(){
        sessionStorage.removeItem("userId");
        sessionStorage.removeItem("username");
        this.setState({
            userId: null,
            username: null
        })
    }

    render() { 
        const {match, location} = this.props;
        const {userId, username} = this.state;
        return ( 
            <div>
                <Header 
                    username={username}
                    onLogout={this.handleLogout}
                    location={location}
                />
                {/* 帖子列表路由配置 */}
                <Route 
                    exact
                    path={match.url}
                    render={props => <PostList username={username} userId={userId} {...props} />} 
                />
                {/* 帖子详情路由配置 */}
                <Route
                    exact
                    path={`${match.url}/:id`}
                    render={props => <Post username={username} userId={userId} {...props} /> }
                />
            </div>
         );
    }
}
 
export default Home;