import React, { useState } from 'react';
import Table from '../../support/table/table.jsx'
import colors from '../../../assets/colors'

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
                <div style={headerStyle}>
                    header
                </div>
                <div style={tableBoxStyle}>
                    <Table data={data}></Table>
                </div>
            </div>
        );
    } else if (error) {
        return <div>Error</div>
    } else {
        return <div>Loading</div> //Todo: Criar um Loading
    }

}

const headerStyle = {
    height: '9vh',
}

const tableBoxStyle = {
    border: 'solid 3px',
    borderColor: colors.borderStrong,
    borderRadius: 15,
    padding: 10,
    height: '87vh',
}



export default PostList;
