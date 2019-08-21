import React, { useState, useEffect } from 'react';
import Table from '../../support/table/table.jsx'
import Header from '../header/header.jsx';

import colors from '../../../assets/colors'

import GetUserList from '../../../service/getUserList.js';

const UserList = () => {
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        if (data) return
        GetUserList().then(setData).catch(setError)
    }, [])


    if (error) {
        return <div>error</div>
    } else if (data) {
        return (
            <div style={containerStyle}>
                <Header />
                <div style={tableBoxStyle}>
                    <Table data={data}></Table>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <Header />
                <p> loading... </p>
            </div>
        );//TODO:  create loading
    }
}

const containerStyle = {
    padding: '0px 20vh 0px 20vh' //TODO: Fix mobile padding
}

const tableBoxStyle = {
    border: 'solid 3px',
    borderColor: colors.borderStrong,
    borderRadius: 15,
    padding: 10,
    height: '87vh',
    overflow: 'auto',
    background: 'white'
}

export default UserList;
