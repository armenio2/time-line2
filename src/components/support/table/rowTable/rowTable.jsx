import React from 'react';
import Avatar from '../../avatar/avatar'


/**
 * EX: avatar='foo.png' name='user name' email='user email'
 */
const RowTable = (props) => {
    return (
        <div style={styles}>
            <div style={flexRows}>
                <div style={rows}>
                    <div style={columnsAvatar}>
                        <Avatar />
                    </div>
                </div>
                <div style={rows}>
                    <div style={columns}>
                        <span>{props.name}</span>
                    </div>
                    <div style={columns}>
                        <span>{props.email}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    background: 'grey',
    border: '2px solid black',
    boxSizing: 'border-box',
    width: '100%',
    height: '70px',
    textAlign: 'center',
    marginTop: 10,
    padding: '0px 10px 0px 10px'
}

const flexRows = {
    display: 'flex'
}

const rows = {
    display: 'initial'
}

const columnsAvatar = {
    flex: '50%',
    width: '20%',
    padding: '10px',
}

const columns = {
    flex: '50%',
    width: '100%',
    bot: '50%',
    padding: '8px',
}

export default RowTable;
