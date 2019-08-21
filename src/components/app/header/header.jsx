import React from 'react';
import Avatar from '../../support/avatar/avatar';

/**
 * Header generic
 */
const Header = () => {
    return (
        <div style={styles}>
            <Avatar />
            Name
        </div>
    );
}

const styles = {
    height: '8vh',
    padding: 10,
    textAlign: 'center'
}

export default Header;
