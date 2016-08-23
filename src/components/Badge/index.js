import React from 'react'

const Badge = ({text, color = 'black'}) => {
    const style = {
        border: `1px solid ${color}`,
        borderRadius: '10%',
        fontSize: '1em',
        display: 'inline',
        padding: '1px 5px',
        margin: '1px 1px',
        color: color
    }
    return (
        <div style={style}>
            {text}
        </div>
    )
}

export default Badge
