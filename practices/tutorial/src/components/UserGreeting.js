import React,{Component} from  'react'

class UserGreeting extends Component{
    constructor(props){
        super(props)
        this.state = {
            isloggedin : true
        }
    }
    render(){
        if (this.state.isloggedin)
        {
            return (
                <div>
                    Welcome Nahid!
                </div>
            )
        }
        else
        {
           return (
               <div>
                   Welcome Guests!
               </div>
           ) 
        }
        
    }
}
export default UserGreeting

