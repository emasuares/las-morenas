import {useState} from 'react'

const Counter =() => {
    const count=useState(0);

    const increment =() =>{
        count[1](count[0]+1)
    }

    const decrement =() =>{
        count[1](count[0]-1)
    }

    return (
        <div>
            <h1>{count[0]}</h1>
            <button onClick={decrement}>-</button>
            <button onClick ={increment}>+</button>
        </div>
    )
}

export default Counter