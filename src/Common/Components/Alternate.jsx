import React from 'react'

const Alternate = ({
    alter,
    alternate,
    original
}) => {
    const children = alter ? alternate : original
    return <div> {children} </div>
}

Alternate.propTypes = {
    alter: React.PropTypes.bool.isRequired,
    alternate: React.PropTypes.node.isRequired,
    original: React.PropTypes.node.isRequired
}

export default Alternate
