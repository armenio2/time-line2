import React, { useState } from 'react';

import GetPostList from '../../../service/getPostList.js';

/**
 *  
 */
const PostList = () => {
    const [pathId, changeId] = useState(window.location.hash.replace('#', ''));
    const [data, setData] = useState();
    if (!data) {
        GetPostList(pathId, setData)
    }

    console.log('result ', data)
    return (
        <div>
            posts
        </div>
    );

}



export default PostList;
