import React from 'react'

const url = require('../Assets/error_message.jpg')

const PageNotFound = () => (
    <section style={{
        'width': '600px',
        'margin': 'auto',
        'margin-top': '20px'
    }}>
        <div style={{
            'margin-top': '80px',
            'font-size': '60px',
            'padding-bottom': '225px',
            'background': `url(${url}) bottom center no-repeat`,
            'width': '100%',
            'text-align': 'center'
        }}>Error 404</div>
    </section>
)

export default PageNotFound