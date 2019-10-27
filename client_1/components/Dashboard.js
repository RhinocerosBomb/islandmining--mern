import React, { Component } from 'react'
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        axios.get('http://localhost:9000/dashboard').then(user => {
            this.setState({
                user: user.data
            })
        })
    }

    render() {
        return (
            <div>
                {this.user.username}
            </div>
        )
    }
}
