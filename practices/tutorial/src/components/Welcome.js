import React,{Component} from 'react'

class Welcome extends Component{
    render(){
        const  {subject} = this.props
        return <h1>Hello {this.props.subject}</h1>
    }
}
export default Welcome