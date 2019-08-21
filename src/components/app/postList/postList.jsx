import React, { useState, useEffect } from 'react';
import Table from '../../support/table/table.jsx'
import colors from '../../../assets/colors'
import Header from '../header/header.jsx';
import GetPostList from '../../../service/getPostList.js';
import ScreenSize from '../../../util/screenSize.js';

/**
 *  Post List
 */
const PostList = () => {
    const [pathId, /*changeId //TODO: Change ID when click comment  */] = useState(window.location.hash.replace('#', ''));
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        if (data) return
        GetPostList(pathId).then(setData).catch(setError)
    }, [])

    if (data) {
        return (
            <div style={containerStyle}>
                <Header />
                <div style={tableBoxStyle}>
                    <Table data={data}></Table>
                </div>
            </div>
        );
    } else if (error) {
        return <div>Error</div>
    } else {
        return (
            <div>
                <Header />
                <p> loading... </p>
            </div>
        );//TODO:  create loading
    }

}

const size = ScreenSize()
const responsivePadding = (size.width > 770) ? '0px 20vh 0px 20vh' : '0px 0px 0px 0px' //TODO: Change Inline CSS to Styled Components

const containerStyle = {
    padding: responsivePadding //TODO: Change Responsive Metod
}

const tableBoxStyle = {
    border: 'solid 3px',
    borderColor: colors.borderStrong,
    borderRadius: 15,
    padding: 10,
    height: '87vh',
    overflow: 'auto'
}

export default PostList;
