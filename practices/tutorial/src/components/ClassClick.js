import React, { Component } from 'react'

export class ClassClick extends Component {
    classHandler(){
        console.log("Clicked the Class")
    }
    render() {
        return (
            <div>
                <button onClick={this.classHandler}>
                    Click Here
                </button>
            </div>
        )
    }
}

export default ClassClick
