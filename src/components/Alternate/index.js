import React from 'react'

const Alternate = ({
    alter,
    alternate,
    original
}) => {
    const children = alter ? alternate : original
    return alter ? alternate : original
}

Alternate.propTypes = {
    alter: React.PropTypes.bool.isRequired,
    alternate: React.PropTypes.node.isRequired,
    original: React.PropTypes.node.isRequired
}

export default Alternate
