import React from 'react'
import Employee from './Employee'

function NameList() {
    const empInfo = [
        { 
          id:1,
          name:'Nahid',
        },
        {
            id:2,
            name:'Hasan',
        },
        {
            id:3,
            name:'Soron',
        }
    ]
    const empList = empInfo.map((emp,key)=><h2 key={key}>{key}{emp.name}</h2>)
    return (
        <div>

            {
                empList
            }
            
        </div>
    )
}

export default NameList
