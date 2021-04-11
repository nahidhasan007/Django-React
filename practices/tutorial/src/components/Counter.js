import React, {Component} from 'react'

class Counter extends Component{
    constructor(){
        super()
        this.state = {
            variable : 0
        }
    }
    increment(){
        this.setState({
            variable : this.state.variable + 1
        })

    }
    decrement(){
        this.setState({
            variable : this.state.variable - 1
        })

    }
    render(){
        return(
            <div>
                <button onClick={()=>this.increment()}>+</button>
                <h1>Count : {this.state.variable}</h1>
                <button onClick={()=>this.decrement()}>-</button>
                    
         </div>
        )
    }
}
export default Counter 
