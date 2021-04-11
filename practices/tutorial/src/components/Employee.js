import React from 'react'

function Employee({emp,key}) {
    return (
        <div>
            <h2>
                I am {emp.name}
            </h2>
        </div>
    )
}

export default Employee
