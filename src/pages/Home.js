import React, { Component } from 'react';
import Header from '../components/Header';
import { Route } from 'react-router-dom';
import PostList from './../containers/PostList';
import Post from '../containers/Post';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    render() { 
        const {match, location} = this.props;
        const {username} = this.state;
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
                    render={props => <PostList username={username} {...props} />} 
                />
                {/* 帖子详情路由配置 */}
                <Route
                    exact
                    path={`${match.url}/:id`}
                    render={props => <Post username={username} {...props} /> }
                />
            </div>
         );
    }
}
 
export default Home;