import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {username, onLogout, location} = this.props;
        return ( 
            <div className="header">
                <span className="left-link">
                    <Link to="/">首页</Link>
                </span>
                {
                    username && username.length > 0 
                    ? <span className="user">
                        当前用户：{username}&nbsp;<button onClick={onLogout}>注销</button>
                    </span> 
                    : <span className="right-link">
                        <Link to={{pathname: "/login", state: {from: location}}}/>
                    </span>
                }
            </div>
         );
    }
}
 
export default Header;