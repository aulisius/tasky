import React from 'react'
import { render } from 'react-dom'
import App from './App.jsx'

// const injectTapEventPlugin = require('react-tap-event-plugin')
// injectTapEventPlugin()

window.fbAsyncInit = () => {
    FB.init({
        appId: '256217748078085',
        xfbml: false,
        version: 'v2.7'
    });
};

((d, s, id) => {
    let fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) {
        return
    }
    console.log('Loading FB SDK...')
    let js = d.createElement(s)
    js.id = id
    js.src = '//connect.facebook.net/en_US/sdk.js'
    fjs.parentNode.insertBefore(js, fjs)
}) (document, 'script', 'facebook-jssdk')

render(<App />, document.getElementById('admin-panel'))
