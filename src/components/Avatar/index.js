import React from 'react'

const style = {
    borderRadius: '20%',
    objectFit: 'cover'
}

const Avatar = ({name, picture, size = 64, full = false}) => {

    const mini = (
        <img
            width={`${size}px`}
            height={`${size}px`}
            style={style}
            src={picture}
            alt={name}
            />)

    return mini
}

export default Avatar
