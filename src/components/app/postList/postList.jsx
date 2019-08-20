import React, { useState } from 'react';

import GetPostList from '../../../service/getPostList.js';

/**
 *  
 */
const PostList = () => {
    const [pathId, changeId] = useState(window.location.hash.replace('#', ''));
    const [data, setData] = useState();
    const [error, setError] = useState();
    if (!data) {
        GetPostList(pathId, setData, setError)
    }

    console.log('result ', data)
    if (data && !error) {
        return (
            <div>
                posts
            </div>
        );
    } else if (error) {
        return <div>Error</div>
    } else {
        return <div>Loading</div> //Todo: Criar um Loading
    }

}



export default PostList;
