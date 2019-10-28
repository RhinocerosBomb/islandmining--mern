import React, { Component } from 'react'

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    /** 
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    */
    handleSubmit

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
