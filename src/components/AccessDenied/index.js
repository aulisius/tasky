import React from 'react'

const url = require('../../assets/access_denied.jpg')

const AccessDenied = () => (
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
        }}>Access Denied</div>
    </section>
)

export default AccessDenied
