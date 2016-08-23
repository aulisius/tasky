import React from 'react'

const style = {
    'border-radius': '20%'
}

const Avatar = ({name, picture, size = 64}) => (
    <img
        width={`${size}px`}
        height={`${size}px`}
        style={style}
        src={picture}
        alt={name}
    />
)

export default Avatar
