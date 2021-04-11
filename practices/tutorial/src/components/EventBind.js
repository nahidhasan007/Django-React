import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props){
        super(props)
        this.state = {
            message:'hola!'
        }
        this.bindHandler = this.bindHandler.bind(this)

    }
    bindHandler(){
        this.setState({
            message:"Hola is a spanish word means greeting or hello"

        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.bindHandler}>
                    Bind
                </button>
            </div>
        )
    }
}

export default EventBind
