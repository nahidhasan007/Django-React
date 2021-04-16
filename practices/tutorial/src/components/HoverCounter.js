import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'
class HoverCounter extends Component {
    render() {
        const {count,increment} = this.props
        return (
            <h2 onMouseOver={increment}>
               {this.props.name} Hovered Html Element {count} times
            </h2>
        )
    }
}

export default UpdatedComponent(HoverCounter)
