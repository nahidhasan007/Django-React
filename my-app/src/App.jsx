import React,{useEffect, useState} from 'react'
import Axios from 'axios'

const App = ()=>{
    const [todo,setTodo]=useState(null)
    useEffect(()=>{
        const gettodo=async()=>{
            await Axios({
                method:"GET",
                url:"http://127.0.0.1:8000/"
            }).then(response=>{
                console.log(response.data);
                setTodo(response.data)
            })
        }
        gettodo()
    },[])
    return (
        <div>{
            todo !== null ? (
                <div> 
                    {
                        todo.map(d=>(
                           <h3>{d.id} {d.text} at {d.date}</h3>

                        ))
                    }
                </div>
            ) : (
                <h1>Empty list of Data</h1>
            )
}
        </div>
    )
}
export default App