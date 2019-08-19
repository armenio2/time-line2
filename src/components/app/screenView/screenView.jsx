import React from 'react';

import UserList from '../userList/userList.jsx';
import PostList from '../postList/postList.jsx';
import { BrowserRouter as Router, Route } from "react-router-dom";

const user_list = () => {
    return <UserList />
}
const post_list = () => {
    return <PostList />
}

/**
 * Router View
 */
const ScreenView = () => {
    console.log("passou no screen")
    return (
        <div className="App">
            <Router>
                <Route path="/" exact component={user_list} />
                <Route path="/postlist/" component={post_list} />
            </Router>
        </div>
    );
}

export default ScreenView;