import React from 'react';
import Avatar from '../../avatar/avatar'

import colors from '../../../../assets/colors'

import { useDispatch } from 'react-redux'


/**
 * EX: avatar='foo.png' name='user name' email='user email'
 */
const RowTable = (props) => {
    const dispatch = useDispatch();
    const clickRow = (id) => {
        dispatch({ type: 'selectedID', newRouter: '/postlist', newUserId: id })
    }

    return (
        <div
            onClick={() => clickRow(props.id)}
            style={styles}
        >
            <div style={flexRows}>
                <div style={rows}>
                    <div style={columnsAvatar}>
                        <Avatar />
                    </div>
                </div>
                <div style={rows}>
                    <div style={columns}>
                        <span style={styleName}>{props.name}</span>
                    </div>
                    <div style={columns}>
                        <span style={styleEmail}>{props.email}</span>
                    </div>
                </div>
                <div style={rows}>
                    <div style={columns}>
                        <span style={styleName}>{props.title || ''}</span>
                    </div>
                    <div style={columns}>
                        <span style={styleEmail}>{props.body || ''}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    background: 'white',
    border: '2px solid',
    borderColor: colors.borderSecondary,
    boxSizing: 'border-box',
    width: '100%',
    height: '70px',
    textAlign: 'center',
    itemAlign: 'center',
    marginTop: 10,
    padding: '0px 10px 0px 10px',
    boxShadow: '2px 2px 2px grey',
    cursor: 'pointer',
    overflow: 'hidden'
}

const flexRows = {
    display: 'flex'
}

const rows = {
    display: 'initial'
}

const columnsAvatar = {
    flex: '100%',
    width: '20%',
    itemAlign: 'center',
    padding: 5
}

const columns = {
    flex: '50%',
    width: '100%',
    bot: '50%',
    padding: '8px',
}

const styleName = {
    color: colors.textStrong,
    fontWeight: 'bold'
}

const styleEmail = {
    color: colors.textNeutral,
    fontWeight: 'bold'
}

export default RowTable;
