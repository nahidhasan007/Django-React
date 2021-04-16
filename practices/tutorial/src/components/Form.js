import React, { Component } from 'react'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:'',
            topic:'Vue'
        }
    }
    handelChange = (event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handleTopic = (event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit = event=>{
        alert(`${this.state.username} ${this.state.topic}`)
        event.preventDefault()
    }
    render() {
        return (
           <form onSubmit={this.handleSubmit}>
               <div>
                   <label>UserName</label>
                   <input type="text" value={this.state.username}
                   onChange={this.handelChange}/>
               </div>
               <div>
                   <label>Select Topic</label>
                   <select value={this.state.topic} onChange={this.handleTopic}>
                       <option value='React'>React</option>
                       <option value='Angular'>Angular</option>
                       <option value='Vue'>Vue</option>
                   </select>

               </div>
               <button type='submit'>Submit</button>
           </form>
        )
    }
}

export default Form
