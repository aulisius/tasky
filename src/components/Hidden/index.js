import React from 'react'

const Hidden = ({hide, children}) => hide ? <div></div> : children

Hidden.propTypes = {
    hide: React.PropTypes.bool.isRequired
}

export default Hidden
