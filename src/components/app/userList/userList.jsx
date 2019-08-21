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
            <div>
                <div style={headerStyle}>
                    <Header />
                </div>
                <div style={tableBoxStyle}>
                    <Table data={data}></Table>
                </div>
            </div>
        );
    } else {
        return <div>loading</div> //TODO:  create loading
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
    overflow: 'auto',
    background: 'white'
}

export default UserList;
