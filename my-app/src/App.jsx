import React,{useEffect, useState} from 'react'
import Axios from 'axios'

const App = ()=>{
    const [todo,setTodo]=useState(null)
    const [datat,setData]=useState('')
    const [reload,setReload]=useState(null)
    const [edit,setEdit] = useState(false)
    const [editid,setEditid]=useState(null)
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
    },[reload])
    const addTodo = async ()=> {
        await Axios({
            method:"post",
            url:"http://127.0.0.1:8000/",
            data:{
                'text': datat
            }
        }).then(response=>{
            console.log(response.data);
            setReload(response.data)
            setData('')
        })
    }
    const editTodo = async (id)=>{
        setEditid(id)
        await Axios({
            method:"get",
            url:`http://127.0.0.1:8000/${id}/`
        }).then(response=>{
           setData(response.data['text'])
           setEdit(true)
        })
    }
    const updateTodo = async()=>{
        await Axios({
            method:'put',
            url:`http://127.0.0.1:8000/${editid}/`,
            data:{
                'text':datat
            }
        }).then(response=>{
            console.log(response.data);
            setReload(response.data)
            setEdit(false)

        })
    }
    const deleteTodo = async (id)=>{
        await Axios({
            method:"delete",
            url:`http://127.0.0.1:8000/${id}/`
        }).then(response =>{
            console.log(response.data);
            setReload(response)
        })
    }
    return (
        <div>
            <div>
                <input onChange={(e)=>setData(e.target.value)}value={datat} type="text"/>
                {
                    edit?
                    <button onClick={updateTodo}>Update Todo</button>
                    :
                    <button onClick={addTodo}>Add Todo</button>
                }
                
                
            </div>
            {
            todo !== null ? (
                <div> 
                    {
                        todo.map(d=>(
                        <div>
                           <h3>{d.id} {d.text}</h3>
                           <button onClick={()=>editTodo(d.id)}>Update</button>
                           <button onClick={()=>deleteTodo(d.id)}>Delete</button>
                        </div>

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
