import React, {Component} from 'react'

class Logout extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        console.log('here')
        sessionStorage.removeItem('tasky-user-logged-in')
        this.context.router.push('/login')
//        window.location.reload()
    }



    render() {
        return (
            <div>

            </div>
        )
    }
}

Logout.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default Logout
