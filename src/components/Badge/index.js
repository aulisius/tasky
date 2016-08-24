import React from 'react'

const Badge = ({text, color = 'black'}) => {
    const style = {
        border: `1px solid ${color}`,
        borderRadius: '10%',
        fontSize: '1em',
        display: 'inline',
        padding: '2px 5px',
        margin: '1px 1px',
        background: color,
        color: 'white'
    }
    return (
        <div style={style}>
            {text.toUpperCase()}
        </div>
    )
}

export default Badge
