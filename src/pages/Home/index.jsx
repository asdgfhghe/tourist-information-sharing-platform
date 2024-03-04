import React, { Component } from 'react'
import { Button } from 'antd'

export default class Home extends Component {
    state = {
        home: 1
    }
     
    render() {
        const {home} = this.state
        return (
            <div>
                <h1>Home: {home}</h1>
                <Button type="primary">Button</Button>
            </div>
        )
    }
}

