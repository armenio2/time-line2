import React, { } from 'react';

import UserList from '../userList/userList.jsx';
import PostList from '../postList/postList.jsx';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux'

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
    const routerReducer = useSelector(state => state.router)
    const userId = useSelector(state => state.userSelected)
    const renderRedirect = (value, path) => {
        if (value !== path) {
            return <Redirect to={`${value}#${userId}`} />
        }
    }
    return (
        <div className="App">
            <Router>
                {renderRedirect(routerReducer, window.location.pathname)}
                <Route path="/" exact component={user_list} />
                <Route path="/postlist" component={post_list} />
            </Router>
        </div>
    );
}

export default ScreenView;