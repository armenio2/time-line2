import React from 'react';

import { avatar } from '../../../assets/img'
import colors from '../../../assets/colors'

const isValid = (src) => {
    if (src) {
        return true
    } else {
        return false
    }
}

/**
 * EX: src='foo.png' alt='description'
 */
const Avatar = (props) => {
    const valid = isValid(props.src)
    return (
        <img
            style={styles}
            src={valid ? props.src : avatar.placeholder}
            alt={props.alt}
        />
    );
}

const styles = {
    background: colors.backgroundDefault,
    border: '2px solid white',
    borderRadius: '100%',
    padding: '2px'
}

export default Avatar;
