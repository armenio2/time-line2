import React, { Component } from 'react';

import UserList from '../userList/userList.jsx';
import PostList from '../postList/postList.jsx';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';


const user_list = () => {
    return <UserList />
}
const post_list = () => {
    return <PostList />
}

/**
 * Router View
 */
class ScreenView extends Component {
    render() {
        const { newValue } = this.props;
        console.log("passou no screen ", newValue)
        return (
            <div className="App">
                <Router>
                    <Route path="/" exact component={user_list} />
                    <Route path="/postlist/" component={post_list} />
                </Router>
            </div>
        );
    }
}

const mapStateToProps = store => ({ newValue: store.clickState.newValue });

export default connect(mapStateToProps)(ScreenView);