import React from 'react'

const UpdatedComponent = (OriginalComponent)=>{
    class NewComponent extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
    
        increment = ()=>{
            this.setState(prevState=>{
                return {count : prevState.count + 1}
            })
    
        }
        
        render(){
            return <OriginalComponent
            name = "Nahid"
            count={this.state.count}
            increment={this.increment}/>
        }
    }
    return NewComponent
}
export default UpdatedComponent