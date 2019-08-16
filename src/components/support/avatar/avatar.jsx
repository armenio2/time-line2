import React from 'react';

import { avatar } from '../../../assets/img'

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
        <div>
            <img
                src={valid ? props.src : avatar.placeholder}
                alt={props.alt}
            />
        </div>
    );
}

export default Avatar;
